import {List, Map} from 'immutable'

export const INITIAL_STATE = List()

export function initState (state) {
    if(!state) {
        return List()
    }   else {
        return state
    }
}

export function addEntry (state, entry) {
    const newEntry = Map({
        place: entry,
        votes: 1
    })
    return state.push(newEntry)
}

export function deleteEntry(state, entry) {
    return state.filterNot(x => x.get('place') == entry)
}

export function getEntryVotes(state, entry) {
    var place = state.find(x => x.get('place') == entry)
    return place ? place.get('votes') : 0
}

export function increment(state, entry) {
    return state.map(x => {if (x.get('place') == entry) {
            return x.updateIn(['votes'], 0 , votes => votes + 1)
        } else { 
            return x 
        }
    })

}

export function incrementOrAddEntry(state, entry) {    
    if (state.find(x => x.get('place') == entry)){
        return increment(state, entry)
    } else {
        return addEntry(state, entry)
    }
}

export function decrement(state, entry) {
    return state.map(x => {
        if(x.get('place') == entry){
            return x.updateIn(['votes'], 0, votes => votes > 0 ? votes - 1 : votes)
        } else {
            return x
        }
    })
}


