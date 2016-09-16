import {List, Map} from 'immutable'

function setListings (state, newState) {
    return state.merge(newState)
}

function goingTo(state, entry) {
    return state.map(x => {
        if (x.get('place') == entry) {
           return  x.update('votes', 1, votes => votes + 1)       
        } 
        return x
    })
}

function notGoingTo(state, entry){
    return state.map(x => {
        if(x.get('place') == entry) {
            return x.update('votes', 0, votes => votes > 0 ? votes - 1 : 0)
        }
        return x
    })
}

export default function (state = List(), action) {
    switch(action.type) {
        case 'SET_LISTINGS': return setListings(state, action.listings)
        case 'GOING_TO': return goingTo(state, action.entry)
        case 'NOT_GOING_TO': return notGoingTo(state, action.entry)
        default: return state
    }
}