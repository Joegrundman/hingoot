export function addEntry(entry) {
    return { entry, type: 'ADD_ENTRY'}
}

export function deleteEntry(entry) {
    return { entry, type: 'DELETE_ENTRY'}
}

export function increment(entry) {
    return { entry, type: 'INCREMENT_VOTE'}
}

export function decrement(entry) {
    return { entry, type: 'DECREMENT_VOTE'}
}