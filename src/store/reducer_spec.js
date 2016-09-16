import {List, Map, fromJS} from 'immutable'
import {expect} from 'chai'

import reducer from './reducer'

describe('the reducer', () => {
    const listings = List.of(
        Map({
            place: "Boat House",
            votes: 4
        }),
        Map({
            place: "The Railway",
            votes: 3
        }),
        Map({
            place: "The Gate",
            votes: 0
        })
    )


    it('should handle SET_LISTINGS', () => {
        const initialState = List()
        const action = {
            type: 'SET_LISTINGS',
            listings
        }

        const nextState = reducer(initialState, action)

        expect(nextState).to.equal(listings)
    })

    it('should handle GOING_TO', () => {
        const state = listings
        const action = {
            type: 'GOING_TO',
            entry: 'The Gate'
        }
        const nextState = reducer(state, action)
        expect(nextState).to.equal(
            List.of(
                Map({
                    place: "Boat House",
                    votes: 4
                }),
                Map({
                    place: "The Railway",
                    votes: 3
                }),
                Map({
                    place: "The Gate",
                    votes: 1
                })
            )
        )
    })

    it('should handle NOT_GOING_TO', () => {
        const state = listings
        const action = {
            type: 'NOT_GOING_TO',
            entry: 'The Railway'
        }
        const nextState = reducer(state, action)
        expect(nextState).to.equal(
            List.of(
                Map({
                    place: "Boat House",
                    votes: 4
                }),
                Map({
                    place: "The Railway",
                    votes: 2
                }),
                Map({
                    place: "The Gate",
                    votes: 0
                })
            )
        )
    })

})