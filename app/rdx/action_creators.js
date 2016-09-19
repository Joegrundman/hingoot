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
    cleanUpStore: function cleanUpStore(day, hrs){
        return {day, hrs, type: 'CLEAN_UP_STORE'}
    }    
}