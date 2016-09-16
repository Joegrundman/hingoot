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
const cleanUpSTore = actions.cleanUpSTore
const getEntryVotes = require('./app/rdx/core').getEntryVotes

const PORT = process.env.PORT || 4000

if (isDev){
    console.log("node development environment")
    require('dotenv').load()
}
const config = require('./app/config/auth')
// yelp config
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

app.use(express.static('build/'))

app.get('/', function(req, res){
    res.sendFile(process.cwd() + '/build/index.html')
})

app.get('/yelp/:searchResult', function(req, res) {

    var location = decodeURIComponent(req.url.replace('/yelp/', '')).replace(/\s/g, '+')

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
        console.log(usefulData)
        res.json(usefulData)
    }).catch(function(err) {
        console.log(err)
    })
})


app.get('/going/:id.:timezone', (req, res) => {
    // var id = decodeURIComponent(req.url.replace('/going/', ''))
    var id = decodeURIComponent(req.params.id)
    var time = decodeURIComponent(req.params.time)
    console.log('incrementing for', id)
    store.dispatch(incrementOrAddEntry(id))  
    var votes = getEntryVotes(store.getState(), id)
    res.json({votes})

})

app.get('/notgoing/:id/', (req, res) => {
    // var id = decodeURIComponent(req.url.replace('/notgoing/', ''))
    var id = decodeURIComponent(req.params.id)
    console.log('decrementing for', id)
    store.dispatch(decrement(id))
    var votes = getEntryVotes(store.getState(), id)
    res.json({votes})
})

app.listen(PORT, function(){
    console.log('Hingoot server listening on http://localhost/%s', PORT)
})

