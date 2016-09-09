// require('babel-register')()

// var jsdom = require('jsdom').jsdom
// var exposedProperties = ['window', 'navigator', 'document']


// global.document = jsdom('')
// global.window = document.defaultView
// Object.keys(document.defaultView).forEach(property => {
//     if (typeof global[property] === 'undefined'){
//         exposedProperties.push(property)
//         global[property] = document.defaultView[property]
//     }
// })

// global.navigator = {
//     userAgent: 'node.js'
// }

// documentRef = document

import jsdom from 'jsdom'

const doc = jsdom.jsdom(`
<!doctype html>
<html>
<body>
</body>
</html>
`)

const win = doc.defaultView

global.document = doc
global.window = win

Object.keys(window).forEach(key => {
    if(!(key in global)) {
        global[key] = window[key]
    }
})