import {List, Map, fromJS} from 'immutable'

function setListings (state, newState) {
    return state.merge(newState)
}

function goingTo(listState, entry) {
    return listState.map(x => {
        if (x.get('place') == entry) {
           return  x.update('votes', 1, votes => votes + 1)       
        } 
        return x
    })
}

function notGoingTo(listState, entry){
    return listState.map(x => {
        if(x.get('place') == entry) {
            return x.update('votes', 0, votes => votes > 0 ? votes - 1 : 0)
        }
        return x
    })
}

function toggleAllowUnauth(state) {
    const allowUnauth = state.get('allowUnauthorised')
    return state.set('allowUnauthorised', !allowUnauth)
}

function togglePristine(state) {
    const isPristine = state.get('pristine')
    return state.set('pristine', !isPristine)
}

const initialState = Map({
    pristine: true,
    listings: List(),
    allowUnauthorised: false
})

export default function (state = initialState, action) {
    switch(action.type) {
        case 'SET_LISTINGS': return setListings(state, action.listings)
        case 'GOING_TO': return state.update('listings', listState => goingTo(listState, action.entry))
        case 'NOT_GOING_TO': return state.update('listings', listState => notGoingTo(listState, action.entry))
        case 'TOGGLE_ALLOW_UNAUTHORISED': return toggleAllowUnauth(state)
        case 'TOGGLE_PRISTINE': return togglePristine(state)
        default: return state
    }
}