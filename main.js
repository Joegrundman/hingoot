const makeStore = require('./app/rdx/store')
const startServer = require('./app/socket-server')

const store = makeStore()

startServer(store)

//initialize dispatches