import {List, Map} from 'immutable'
import {expect} from 'chai'

import {initState, 
        addEntry, 
        getEntryVotes,
        increment,
        decrement,
        deleteEntry} from '../../app/rdx/core'

describe('application logic', () => {
    describe('initState', () => {
        it('initialises the state as an empty state tree', () => {
            const nextState = initState(null)

            expect(nextState).to.equal(List())
        })
    })

    describe('addEntry', () => {
        it('adds a new entry to the state', () => {
            const state = List.of(Map({place: "Boat House"}))
            const nextState = addEntry(state, "The Railway")

            expect(nextState).to.equal(List.of(
                Map({place: "Boat House"}),
                Map({place: "The Railway"})
            ))
        })
    })

    describe('deleteEntry', () => {
        it('removes an entry from the state', () => {
            const state = List.of(
                Map({place: "Boat House"}),
                Map({place: "The Railway"})
            )
            const nextState = deleteEntry(state, "The Railway")

            expect(nextState).to.equal(List.of(Map({place: "Boat House"})))
        })
    })

    describe('getEntryVotes', () => {
        it('gets the votes for an entry', () => {
           const state = List.of(
                Map({place: "Boat House", votes: 3}),
                Map({place: "The Railway", votes: 5})
            )
            expect(getEntryVotes(state, "Boat House")).to.equal(3)
            expect(getEntryVotes(state, "The Railway")).to.equal(5)
        })
    })

    describe('increment', () => {
        it('increments the votes on an entry', () => {
           const state = List.of(
                Map({place: "Boat House", votes: 3}),
                Map({place: "The Railway", votes: 5})
            )   
            const nextState = increment(state, "Boat House")  
            expect(nextState).to.equal(List.of(
                Map({place: "Boat House", votes: 4}),
                Map({place: "The Railway", votes: 5})
            )   )     
        })

        it ('should add a single vote if there is no vote attribute', () => {
                const state = List.of(
                    Map({place: "Boat House"}),
                    Map({place: "The Railway", votes: 5})
                )      
                const nextState = increment(state, "Boat House") 
                expect(nextState).to.equal(List.of(
                    Map({place: "Boat House", votes: 1}),
                    Map({place: "The Railway", votes: 5})
                )   )   
        })

    })

    describe("decrement", () => {
        it('should decrement the votes for the relevant entry', () => {
           const state = List.of(
                Map({place: "Boat House", votes: 3}),
                Map({place: "The Railway", votes: 5})
            )   
            const nextState = decrement(state, "Boat House")  
            expect(nextState).to.equal(List.of(
                Map({place: "Boat House", votes: 2}),
                Map({place: "The Railway", votes: 5})
            )   ) 
        })
        it('should not decrement below zero', () => {
            const state = List.of(
                Map({place: "Boat House", votes: 0}),
                Map({place: "The Railway", votes: 5})
            )   
            const nextState = decrement(state, "Boat House")  
            expect(nextState).to.equal(List.of(
                Map({place: "Boat House", votes: 0}),
                Map({place: "The Railway", votes: 5})
            )   )            
        })
        it('should ignore if there is no vote attribute', () => {
            const state = List.of(
                Map({place: "Boat House"}),
                Map({place: "The Railway", votes: 5})
            )   
            const nextState = decrement(state, "Boat House")  
            expect(nextState).to.equal(List.of(
                Map({place: "Boat House"}),
                Map({place: "The Railway", votes: 5})
            )   )            
        })
    })


})