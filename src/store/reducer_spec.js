import {List, Map, fromJS} from 'immutable'
import {expect} from 'chai'

import reducer from './reducer'

describe('the reducer', () => {
    const listings = Map({
        listings: List.of(
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
    })


    it('should handle SET_LISTINGS', () => {
        const initialState = Map()
        const action = {
            type: 'SET_LISTINGS',
            listings
        }

        const nextState = reducer(initialState, action)

        expect(nextState).to.equal(listings)
    })

    
    it('should handle SET_LISTINGS if no initial state defined', () => {
        const action = {
            type: 'SET_LISTINGS',
            listings
        }

        const nextState = reducer(undefined, action)

        expect(nextState).to.equal(Map({
            pristine: true,
            listings: listings.get('listings'), // cannot compare with the map object, just the list
            allowUnauthorised: false
        }))
    })


    it('should accept plain javascript and convert to immutable with SET_LISTINGS', () => {
        const initialState = List()
        const jsListing = [
            {
                place: "Boat House",
                votes: 4
            },
            {
                place: "The Railway",
                votes: 3
            },
            {
                place: "The Gate",
                votes: 0
            }
        ]
        const action = {
            type: 'SET_LISTINGS',
            listings: jsListing
        }

        const nextState = reducer(initialState, action)

        expect(nextState).to.equal(fromJS(jsListing))

    })

    it('should handle GOING_TO', () => {
        const state = listings
        const action = {
            type: 'GOING_TO',
            entry: 'The Gate'
        }
        const nextState = reducer(state, action)
        expect(nextState).to.equal(
            Map({
            listings: List.of(
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
            )})
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
            Map({
            listings: List.of(
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
            )})
        )
    })

    it('should handle TOGGLE_ALLOW_UNAUTHORISED', () => {
        const state = Map({
            allowUnauthorised: true
        })
        const action = {
            type: 'TOGGLE_ALLOW_UNAUTHORISED'
        }
        const nextState = reducer(state, action)
        expect(nextState).to.equal(Map({
            allowUnauthorised: false
        }))     
    })

    it('should handle TOGGLE_PRISTINE', () => {
        const state = Map({
            pristine: true
        })
        const action = {
            type: 'TOGGLE_PRISTINE'
        }
        const nextState = reducer(state, action)
        expect(nextState).to.equal(Map({
            pristine: false
        }))     
    })


})