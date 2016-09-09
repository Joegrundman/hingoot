const express = require('express')
const Yelp = require('yelp')
import makeStore from './app/rdx/store'
const isDev = process.env.NODE_ENV == 'development'
const PORT = process.env.PORT || 4000

require('dotenv').load()
const config = require('./app/config/auth')

// yelp config
var yelp = new Yelp({
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    token: config.token,
    token_secret: config.tokenSecret
})

let app = express()

/**
 * Redux store will be used to handle server side state, instead of mongodb
 * primarily as an exercise
 * it is faster but of course can't persist if the app is reset
 * but this should not matter since no entry ever has to persist more than one day'
 */
const store = makeStore()

if(process.env)

app.use(express.static('build/'))

app.get('/', function(req, res){
    res.sendFile(process.cwd() + '/build/index.html')
})

app.get('/yelp/:searchResult', function(req, res) {

    // console.log('incoming search request', req.url)

    var location = decodeURIComponent(req.url.replace('/yelp/', '')).replace(/\s/g, '+')
    // console.log('parsed location', location)

    yelp.search({
        term: 'nightlife',
        location: location,
        limit: 20
    }).then(function(data) {
        // console.log(data.businesses)
        var usefulData = data.businesses.map(b => {return {
            name: b.name, 
            snippet_text: b.snippet_text,
            snippet_image_url: b.snippet_image_url,
            url: b.url
        }})
        // console.log(usefulData)
        res.json(usefulData)
    }).catch(function(err) {
        console.log(err)
    })

})

app.listen(PORT, function(){
    console.log('Hingoot server listening on http://localhost/%s', PORT)
})