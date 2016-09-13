// import {initState, 
//         addEntry, 
//         increment,
//         decrement,
//         deleteEntry,
//         incrementOrAddEntry,
//         INITIAL_STATE
//         } from './core'

// export default function reducer(state = INITIAL_STATE, action){
//     switch (action.type) {
//         case 'INIT_STATE': 
//             return initState()
//         case 'ADD_ENTRY':
//             return addEntry(state, action.entry)
//         case 'DELETE_ENTRY':
//             return deleteEntry(state, action.entry)
//         case 'INCREMENT_VOTE':
//             return increment(state, action.entry)
//         case 'DECREMENT_VOTE':
//             return decrement(state, action.entry)
//         case 'INCREMENT_OR_ADD_ENTRY':
//             return incrementOrAddEntry(state, action.entry)
//         default: return state
//     }
// }

const core = require('./core')

const reducer = function reducer ( state, action ) {
    if(!state) { state = core.INITIAL_STATE }
    // if(!action) { return state }
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
                default: return state
            
    }
}

module.exports = reducer