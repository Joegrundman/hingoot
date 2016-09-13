// import {createStore} from 'redux'
// import reducer from './reducer'

// export default function makeStore() {
//     return createStore(reducer)
// }

const createStore = require('redux').createStore
const reducer = require('./reducer')

const makeStore = function makeStore() {
        return createStore(reducer)
}


module.exports = makeStore