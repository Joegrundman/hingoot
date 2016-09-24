import {Map, List, fromJS} from 'immutable'

export const toggleShowHelp = (state) => {
    return state.updateIn(['flags', 'showHelp'], s => !s)
} 

export const toggleAllowUnauth = (state) => {
    return state.upDateIn(['flags', 'allowUnauth'], s => !s)
}

export const togglePristine = (state) => {
    return state.upDateIn(['flags', 'pristine'], s => !s)
}

export const addCharToSearch = (state, str) => {
    return state.upDate('yelpSearchVal', '', s => str)
}

export const searchYelp = (state) => {
    //TODO: we need to make ajax call, set results into state.listings and reset yelpsearch to empty
    return state
}

export const setListings = (state, listings) => {
    return state.update('listings', List(), l => fromJS(listings))
}