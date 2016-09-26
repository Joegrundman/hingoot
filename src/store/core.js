export const toggleShowHelp = (state) => {
    return state.updateIn(['flags', 'showHelp'], false, s => !s)
} 

export const toggleAllowUnauth = (state) => {
    return state.updateIn(['flags', 'allowUnauth'] ,false ,s => !s)
}

export const showListings = (state, status) => {
    return state.updateIn(['flags', 'showListings'], false, s => status)
}

export const setVotesOnListing = (listingState, listingId, votes) => {
    return listingState.map(l => {
        if(l.id === listingId) {
            l.votes = votes
        }
        return l
    })
}

export const setIsGoingOnListing = (listingState, listingId, status) => {
    return listingState.map(l => {
        if(l.id === listingId){ l.isGoing = status }
        return l
    })
}

export const setAjaxFail = (state, status) => {
    return state.updateIn(['flags', 'ajaxFail'], false, s => status)
}

export const toggleFetchingAjax = state => {
    return state.updateIn(['flags', 'isFetching'], false, s => !s)
}

export const addCharToSearch = (state, str) => {
    return state.update('yelpSearchVal', '', s => str)
}

export const setListings = (state, listings) => {
    return state.update('listings', [], l => listings)
}

export const setFbDialogToOpen = (state, status) => {
    return state.updateIn(['flags', 'facebookDialogIsOpen'], false, s => status)
}