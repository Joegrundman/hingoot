import {initState, 
        addEntry, 
        increment,
        decrement,
        deleteEntry,
        INITIAL_STATE
        } from './core'

export default function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'INIT_STATE': 
            return initState()
        case 'ADD_ENTRY':
            return addEntry(state, action.entry)
        case 'DELETE_ENTRY':
            return deleteEntry(state, action.entry)
        case 'INCREMENT_VOTE':
            return increment(state, action.entry)
        case 'DECREMENT_VOTE':
            return decrement(state, action.entry)
        default: return state
    }
}