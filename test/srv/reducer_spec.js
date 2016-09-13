const Immutable = require('immutable')
const expect = require('chai').expect
const reducer = require('../../app/rdx/reducer')
const List = Immutable.List
const Map = Immutable.Map
const fromJS = Immutable.fromJS

describe('the reducer', () => {
    it('handles initialising the tree as an empty List', () => {
        const action = { type: 'INIT_STATE'}
        const initialState = reducer(null, action)

        expect(initialState).to.equal(List())
    })

    it('handles adding an entry to the state', () => {
        const state = List.of(Map({place: "Boat House", votes: 1}))
        const action = {type: 'ADD_ENTRY', entry: 'The Railway'}
        const nextState = reducer(state, action ) 
        expect(nextState).to.equal(List.of(
                Map({place: "Boat House", votes: 1}),
                Map({place: "The Railway", votes: 1})
        ))
    })

    it('handles adding an entry if new or incrementing if present', () => {
        const state = List.of(Map({place: "Boat House", votes: 1}))
        const action1 = {type: 'INCREMENT_OR_ADD_ENTRY', entry: 'The Railway'}
        const action2 = {type: 'INCREMENT_OR_ADD_ENTRY', entry: 'Boat House'}
        const nextState1 = reducer(state, action1)
        const nextState2 = reducer(nextState1, action2)
        expect(nextState2).to.equal(List.of(
                Map({place: "Boat House", votes: 2}),
                Map({place: "The Railway", votes: 1})
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