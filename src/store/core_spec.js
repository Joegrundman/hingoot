import {List, Map} from 'immutable'
import {expect} from 'chai'
import {} from './core'

describe('client-side reducer core functions', () => {
    describe('flag toggles', () => {
        describe('toggleallowUnauth', () => {
            it ('should reverse the allowUnauth toggle when the action is fired using the appropiate actions', () => {
                const state = Map({
                    flags: Map({
                        allowUnauth: true
                    })
                })
                const action = {type: 'TOGGLE_ALLOW_UNAUTH'}
                const nextState = toggleAllowUnauth(state, action)
                expect(nextState).to.equal(Map({
                    flags: Map({
                        allowUnauth: false
                    })
                }))
            })
        })

        describe('toggleShowHelp', () => {
            it ('should reverse the showHelp toggle when the action is fired using the appropiate actions', () => {
                const state = Map({
                    flags: Map({
                        showHelp: true
                    })
                })
                const action = {type: 'TOGGLE_SHOW_HELP'}
                const nextState = toggleShowHelp(state, action)
                expect(nextState).to.equal(Map({
                    flags: Map({
                        showHelp: false
                    })
                }))
            })
        })

        describe('togglePristine', () => {
            it ('should reverse the pristine toggle when the action is fired using the appropiate actions', () => {
                const state = Map({
                    flags: Map({
                        pristine: true
                    })
                })
                const action = {type: 'TOGGLE_PRISTINE'}
                const nextState = togglePristine(state, action)
                expect(nextState).to.equal(Map({
                    flags: Map({
                        pristine: false
                    })
                }))
            })
        })
    })

    describe('search handlers', () => {
        describe('addCharToSearch', () => {
            it ('should add a char to the search string', () => {
                const state = Map({
                    yelpSearchVal: "hello"
                })
                const action = {type: 'ADD_CHAR_TO_SEARCH', str: "helloP"}
                const nextState = toggleShowHelp(state, action)
                expect(nextState).to.equal(Map({
                    yelpSearchVal: "helloP"
                }))
            })
        })

        describe('searchYelp', () => {
            // it('should take the value from the yelpSearchVal and send it to the server', () => {
                // TODO
            // })


        })

        describe('setListings', () => {
            it('should set the received listings onto state.listings', () => {
                const state = Map({
                    listings: List()
                })
                const listings = List.of(
                    Map({place: 'Boat House'}), Map({place: 'The Gate'})
                )
                const action = {type: 'SET_LISTINGS', listings}
                
                const nextState = setListings(state, action)

                expect(nextState.get('listings')).to.equal(listings)
            })

            it('should handle the case where no listing attribute is defined', () => {
                const listings = List.of(
                    Map({place: 'Boat House'}), Map({place: 'The Gate'})
                )
                const action = {type: 'SET_LISTINGS', listings}
                
                const nextState = setListings(null, action)

                expect(nextState.get('listings')).to.equal(listings)              
            })

            it('should convert js listings to immutable', () => {
                const state = Map({
                    listings: List()
                })
                const listings = [{place: 'Boat House'}, {place: 'The Gate'}]
                const action = {type: 'SET_LISTINGS', listings}  
                const nextState = setListings(state, action)

                expect(nextState.get('listings')).to.equal(List.of(
                    Map({place: 'Boat House'}), Map({place: 'The Gate'})
                ))              
            })

            it('should replace existing listings with a new set', () => {
                const state = Map({
                    listings: List.of(Map({place: 'Boat House'}), Map({place: 'The Gate'}))
                })
                const listings = [{place: 'The Thorntree'}, {place: 'The White Lion'}]
                const action = {type: 'SET_LISTINGS', listings}  
                const nextState = setListings(state, action)

                expect(nextState.get('listings')).to.equal(List.of(
                    Map({place: 'The Thorntree'}), Map({place: 'The White Lion'})
                ))              
            })
        })
    })
})