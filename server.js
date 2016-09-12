const express = require('express')
const Yelp = require('yelp')
import {List, Map } from 'immutable'
import makeStore from './app/rdx/store'
import { incrementOrAddEntry, decrement } from './app/rdx/action_creators'
import { getEntryVotes } from './app/rdx/core'
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


app.get('/going/:id', (req, res) => {
    var id = decodeURIComponent(req.url.replace('/going/', ''))
    console.log('incrementing for', id)
    store.dispatch(incrementOrAddEntry(id))  
    var votes = getEntryVotes(store.getState(), id)
    res.json({votes})

})

app.get('/notgoing/:id', (req, res) => {
    var id = decodeURIComponent(req.url.replace('/notgoing/', ''))
    console.log('decrementing for', id)
    store.dispatch(decrement(id))
    var votes = getEntryVotes(store.getState(), id)
    res.json({votes})
})

app.listen(PORT, function(){
    console.log('Hingoot server listening on http://localhost/%s', PORT)
})

