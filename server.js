const isDev = process.env.NODE_ENV == 'development'

const express = require('express')
const Yelp = require('yelp')
const Immutable = require('immutable')
const List = Immutable.List
const Map = Immutable.Map

const makeStore = require('./app/rdx/store')
const actions = require('./app/rdx/action_creators')
const incrementOrAddEntry = actions.incrementOrAddEntry
const decrement = actions.decrement
const cleanUpStore = actions.cleanUpStore
const getEntryVotes = require('./app/rdx/core').getEntryVotes

const PORT = process.env.PORT || 4000

// if development mode, config data taken from .env file
if (isDev){
    console.log("node development environment")
    require('dotenv').load()
}

const config = require('./app/config/auth')

// yelp config data
var yelp = new Yelp({
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    token: config.token,
    token_secret: config.tokenSecret
})

var app = express()

/**
 * Redux store will be used to handle server side state, instead of mongodb
 * primarily as an exercise
 * it is faster but of course can't persist if the app is reset
 * but this should not matter since no entry ever has to persist more than one day'
 */
const store = makeStore()



// automated clean up function called every hour to remove out of 
// date entries in the store
// polling every five mins to see if hour has changed will prevent long time slide 
// in the interval if we use that alone. 
// At most there will be a 5 minute delay, which is acceptable for this purpose

var currentHr = 0 // initialise current hour
const everyFiveMins = 300000 // in ms

setInterval(() => {
    checkToCleanStoreAndExecute()
},everyFiveMins)

const checkToCleanStoreAndExecute = () => {
    console.log('polling for time')
    const timeNow = new Date()
    const serverTimeZone = timeNow.getTimezoneOffset / 60
    const day = timeNow.getDate() 
    const hrs = timeNow.getHours() - serverTimeZone
    console.log('current timezone', -serverTimeZone)
    console.log('current day', day,'    current hrs', hrs)
    if (hrs != currentHr) {
        currentHr = hrs
        cleanUpStore(day, hrs)
        console.log('server called cleanUpStore at time', timeNow)
    }
}

// access the react app
app.use(express.static('build/'))

/**
 * routes
 */

// send react app
app.get('/', function(req, res){
    res.sendFile(process.cwd() + '/build/index.html')
})

// handle incoming search request
app.get('/search', function(req, res) {

    const param = req.query.q

    if(!param) {
        res.json({
            error: 'Missing required parameter "q"'
        })
        return
    }

    var location = decodeURIComponent(param).replace(/\s/g, '+')
    yelp.search({
        term: 'nightlife',
        location: location,
        limit: 20
    }).then(function(data) {

        var usefulData = data.businesses.map(b => {
            var votes = getEntryVotes(store.getState(), b.id)
            return {
            votes, 
            id: b.id,
            name: b.name, 
            snippet_text: b.snippet_text,
            snippet_image_url: b.snippet_image_url,
            url: b.url
        }})
        res.json(usefulData)
    }).catch(function(err) {
        console.log(err)
    })
})

// handle going to request
app.get('/going/:id/:timezone', (req, res) => {
    var id = decodeURIComponent(req.params.id)
    var time = decodeURIComponent(req.params.timezone)
    store.dispatch(incrementOrAddEntry(id))  

    var votes = getEntryVotes(store.getState(), id)
    res.json({votes})
})

// handle changing mind about going
app.get('/notgoing/:id', (req, res) => {
    
    var id = decodeURIComponent(req.params.id)
    store.dispatch(decrement(id))
    var votes = getEntryVotes(store.getState(), id)
    res.json({votes})
})

// start server
app.listen(PORT, function(){
    console.log('Hingoot server listening on http://localhost/%s', PORT)
})

