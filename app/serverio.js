import Server from 'socket.io'

export function startServer(store) {
    const io = new Server().attach(5000)
    // need to not send the whole store, just the diff
    store.subscribe(
        () => io.emit('state', store.getState().toJS())
    )

    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS())
        socket.on('action', store.dispatch.bind(store))
    })
}