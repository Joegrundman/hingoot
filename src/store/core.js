export const toggleShowHelp = (state) => {
    return state.updateIn(['flags', 'showHelp'], false, s => !s)
} 


// export const toggleAllowUnauth = (state) => {
//     return state.upDateIn(['flags', 'allowUnauth'], s => !s)
// }

export const showListings = (state, status) => {
    return state.updateIn(['flags', 'showListings'], false, s => status)
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

export const searchYelp = (state) => {
    console.log('searching', state.get('yelpSearchVal'))
    //TODO: we need to make ajax call, set results into state.listings and reset yelpsearch to empty
    return state
}

export const setListings = (state, listings) => {
    return state.update('listings', [], l => listings)
}

export const setFbDialogToOpen = (state, status) => {
    return state.updateIn(['flags', 'facebookDialogIsOpen'], false, s => status)
}