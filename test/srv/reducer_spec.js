import {Map, List, fromJS} from 'immutable'
import {expect} from 'chai'

import reducer from '../../app/rdx/reducer'

describe('the reducer', () => {
    it('handles initialising the tree as an empty List', () => {
        const action = { type: 'INIT_STATE'}
        const initialState = reducer(null, action)

        expect(initialState).to.equal(List())
    })

    it('handles adding an entry to the state', () => {
        const state = List.of(Map({place: "Boat House"}))
        const action = {type: 'ADD_ENTRY', entry: 'The Railway'}
        const nextState = reducer(state, action) 
        expect(nextState).to.equal(List.of(
                Map({place: "Boat House"}),
                Map({place: "The Railway"})
        ))
    })

    it('handles deleting an entry from the state', () => {
        const state = List.of(
                Map({place: "Boat House"}),
                Map({place: "The Railway"})
            )
        const action = {type: 'DELETE_ENTRY', entry: "The Railway"}
        const nextState = reducer(state, action)

        expect(nextState).to.equal(List.of(Map({place: "Boat House"})))
    })

    it('handles incrementing the votes for an entry', () => {
           const state = List.of(
                Map({place: "Boat House", votes: 3}),
                Map({place: "The Railway", votes: 5})
            )   
            const action = {type: 'INCREMENT_VOTE', entry: "Boat House"}
            const nextState = reducer(state, action)  
            expect(nextState).to.equal(List.of(
                Map({place: "Boat House", votes: 4}),
                Map({place: "The Railway", votes: 5})
            )   )   
    })

    it('handles decrementing the votes for an entry', () => {
           const state = List.of(
                Map({place: "Boat House", votes: 3}),
                Map({place: "The Railway", votes: 5})
            )   
            const action = {type: 'DECREMENT_VOTE', entry: "Boat House"}
            const nextState = reducer(state, action)  
            expect(nextState).to.equal(List.of(
                Map({place: "Boat House", votes: 2}),
                Map({place: "The Railway", votes: 5})
            )   )   
    })

    it('should return the state if an invalid action is used', () =>  {
           const state = List.of(
                Map({place: "Boat House", votes: 3}),
                Map({place: "The Railway", votes: 5})
            )   
            const action = {type: '!!INVALID_ACTION!!', entry: "Boat House"}
            const nextState = reducer(state, action)  
            expect(nextState).to.equal(List.of(
                Map({place: "Boat House", votes: 3}),
                Map({place: "The Railway", votes: 5})
            )   )         
    })
})