export const withActionLogging = store => next => action => {
    console.log('Action called', action.type)
    return next(action)
}