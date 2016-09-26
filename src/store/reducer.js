import {Map} from 'immutable'

import {
    addCharToSearch,
    setVotesOnListing,
    setIsGoingOnListing,
    toggleAllowUnauth,
    showListings,
    setAjaxFail,
    toggleShowHelp,
    toggleFetchingAjax,
    setFbDialogToOpen,
    setListings
} from './core'

export default function (state = Map(), action) {
    switch(action.type) {
        case 'ADD_CHAR_TO_SEARCH': 
            return addCharToSearch(state, action.str)
        case 'SET_VOTES_ON_LISTING':
            return state.update('listings', listing => setVotesOnListing(listingState, action.listingId, action.votes))
        case 'SET_IS_GOING_ON_LISTING': 
            return setIsGoingOnListing(state, action.listingId, action.status)
        case 'TOGGLE_ALLOW_UNAUTH':
            return toggleAllowUnauth(state)
        case 'SHOW_LISTINGS': 
            return showListings(state, action.status)
        case 'TOGGLE_FETCHING_AJAX':
            return toggleFetchingAjax(state)
        case 'TOGGLE_SHOW_HELP':
            return toggleShowHelp(state)
        case 'SET_AJAX_FAIL':
            return setAjaxFail(state, action.status)
        case 'SET_LISTINGS':
            return setListings(state, action.listings)
        case 'SET_FB_DIALOG_TO_OPEN':
            return setFbDialogToOpen(action.status)
        default: return state
    }
}