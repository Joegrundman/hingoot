export const withActionLogging = store => next => action => {
    console.log('Action called', action)
    return next(action)
}
