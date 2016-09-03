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
        place: entry
    })
    return state.push(newEntry)
}

export function deleteEntry(state, entry) {
    return state.filterNot(x => x.get('place') == entry)
}

export function getEntryVotes(state, entry) {
    return state.find(x => x.get('place') == entry).get('votes')
}

export function increment(state, entry) {
    return state.map(x => {if (x.get('place') == entry) {
            return x.updateIn(['votes'], 0 , votes => votes + 1)
        } else { 
            return x 
        }
    })

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
