import makeStore from './app/rdx/store'
import {startServer} from './app/serverio'

export const store = makeStore()
startServer(store)