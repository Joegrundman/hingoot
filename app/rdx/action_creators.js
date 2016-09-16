// export function addEntry(entry) {
//     return { entry, type: 'ADD_ENTRY'}
// }

// export function deleteEntry(entry) {
//     return { entry, type: 'DELETE_ENTRY'}
// }

// export function increment(entry) {
//     return { entry, type: 'INCREMENT_VOTE'}
// }

// export function decrement(entry) {
//     return { entry, type: 'DECREMENT_VOTE'}
// }

// export function incrementOrAddEntry(entry) {
//     return { entry, type: 'INCREMENT_OR_ADD_ENTRY'}
// }

module.exports = {
    initState: function initState() {
        return {type: 'INIT_STATE'}
    },
    addEntry: function addEntry(entry) {
        return { entry, type: 'ADD_ENTRY'}
    },
    deleteEntry: function deleteEntry(entry) {
        return { entry, type: 'DELETE_ENTRY'}
    },
    increment: function increment(entry) {
        return { entry, type: 'INCREMENT_VOTE'}
    },

    decrement: function decrement(entry) {
        return { entry, type: 'DECREMENT_VOTE'}
    },
    incrementOrAddEntry: function incrementOrAddEntry(entry) {
        return { entry, type: 'INCREMENT_OR_ADD_ENTRY'}
    },
    cleanUpStore: function cleanUpStore(){
        return {type: 'CLEAN_UP_STORE'}
    }    
}