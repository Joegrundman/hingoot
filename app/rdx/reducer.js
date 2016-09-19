const core = require('./core')

const reducer = function reducer ( state, action ) {
    if(!state) { state = core.INITIAL_STATE }
    switch (action.type) {
                case 'INIT_STATE': 
                    return core.initState()
                case 'ADD_ENTRY':
                    return core.addEntry(state, action.entry)
                case 'DELETE_ENTRY':
                    return core.deleteEntry(state, action.entry)
                case 'INCREMENT_VOTE':
                    return core.increment(state, action.entry)
                case 'DECREMENT_VOTE':
                    return core.decrement(state, action.entry)
                case 'INCREMENT_OR_ADD_ENTRY':
                    return core.incrementOrAddEntry(state, action.entry)
                case 'CLEAN_UP_STORE':
                    return core.cleanUpStore(state, action.day, action.hrs)
                default: return state          
    }
}

module.exports = reducer