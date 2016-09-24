import {Map} from 'immutable'

import {
//     addCharToSearch,
//     searchYelp,
//     toggleAllowUnauth,
//     togglePristine,
    toggleShowHelp,
//     setListings
} from './core'

export default function (state = Map(), action) {
    switch(action.type) {
        // case 'ADD_CHAR_TO_SEARCH': 
        //     return addCharToSearch(state, action.str)
        // case 'SEARCH_YELP':
        //     return searchYelp(state)
        // case 'TOGGLE_ALLOW_UNAUTH':
        //     return toggleAllowUnauth(state)
        // case 'TOGGLE_PRISTINE':
        //     return togglePristine(state)
        case 'TOGGLE_SHOW_HELP':
            return toggleShowHelp(state)
        // case 'SET_LISTINGS':
        //     return setListings(state, action.listings)
        default: return state
    }
}