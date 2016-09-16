const Immutable = require('immutable')
const Map = Immutable.Map
const List = Immutable.List
// const moment = require('moment')


module.exports = {
    INITIAL_STATE : List(),

    initState : function initState (state) {
        return List()
    },
    
    addEntry : function addEntry (state, entry) {
        const newEntry = Map({
            place: entry,
            votes: 1
        })
        return state.push(newEntry)
    },

    deleteEntry: function deleteEntry(state, entry) {
        return state.filterNot(x => x.get('place') == entry)
    },

    getEntryVotes: function getEntryVotes(state, entry) {
        var place = state.find(x => x.get('place') == entry)
        return place ? place.get('votes') : 0
    },

    increment: function increment(state, entry) {
        return state.map(x => {if (x.get('place') == entry) {
                return x.updateIn(['votes'], 0 , votes => votes + 1)
            } else { 
                return x 
            }
        })
    },

    incrementOrAddEntry: function incrementOrAddEntry(state, entry) {    
        if (state.find(x => x.get('place') == entry)){
            return this.increment(state, entry)
        } else {
            return this.addEntry(state, entry)
        }
    },

    decrement: function decrement(state, entry) {
        return state.map(x => {
            if(x.get('place') == entry){
                return x.updateIn(['votes'], 0, votes => votes > 0 ? votes - 1 : votes)
            } else {
                return x
            }
        })
    },

    cleanUpStore: function cleanUpStore(state, day, hrs = 0) {   
        return state.filter(x => {
            const tz = x.get('tz') || 0
            if (hrs + tz > 24) { 
                return x.get('day') == day + 1          
        }
            else if (hrs + tz < 0) { 
               return x.get('day') == day - 1 
        }
            return x.get('day') == day
        })
    }
} 
