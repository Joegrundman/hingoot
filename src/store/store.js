import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducer'

const isDev = process.env.NODE_ENV === "development"

var loggerMiddleware = createLogger()
// for production set loggerMiddleware to be empty middleware
if (!isDev) {loggerMiddleware = state => next => action => next(action)}


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

const store = createStoreWithMiddleware(reducer)

export default store
