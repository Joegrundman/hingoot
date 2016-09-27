import {List, Map, fromJS} from 'immutable'
import {expect} from 'chai'
import {
    toggleAllowUnauth,
    toggleShowHelp,
    showListings,
    setVotesOnListing,
    setIsGoingOnListing,
    addCharToSearch,
    setListings,
    setAjaxFail,
    setFbDialogToOpen
} from './core'

describe('client-side reducer core functions', () => {
    describe('flag toggles', () => {
        describe('toggleAllowUnauth', () => {
            it('should reverse the allowUnauth toggle', () => {
                const state = Map({
                    flags: Map({
                        allowUnauth: true
                    })
                })
                const nextState = toggleAllowUnauth(state)
                expect(nextState).to.equal(Map({
                    flags: Map({
                        allowUnauth: false
                    })
                }))
            })
        })

        describe('toggleShowHelp', () => {
            it('should reverse the showHelp toggle', () => {
                const state = Map({
                    flags: Map({
                        showHelp: true
                    })
                })
                const nextState = toggleShowHelp(state)
                expect(nextState).to.equal(Map({
                    flags: Map({
                        showHelp: false
                    })
                }))
            })
        })

        describe('showListings', () => {
            it('should set showListings flag to true if sent true as arg', () => {
                const state = Map({
                    flags: Map({
                        showListings: false
                    })
                })
                const nextState = showListings(state, true)
                expect(nextState).to.equal(Map({
                    flags: Map({
                        showListings: true
                    })
                }))
            })
        })
        describe('setAjaxFail', () => {
            it('should set ajaxFail flag to true', () => {
                const state = Map({
                    flags: Map()
                })
                const nextState = setAjaxFail(state, true)
                expect(nextState).to.equal(Map({
                    flags: Map({
                        ajaxFail: true
                    })
                }))
            })
        })

        describe('setFbDialogToOpen', () => {
            it('should set facebookDialogIsOpen flag to true', () => {
                const state = Map({
                    flags: Map()
                })
                const nextState = setFbDialogToOpen(state, true)
                expect(nextState).to.equal(Map({
                    flags: Map({
                        facebookDialogIsOpen: true
                    })
                }))
            })
        })

    })


    describe('addCharToSearch', () => {
        it('should add a char to the search string', () => {
            const state = Map({
                yelpSearchVal: "hello"
            })
            const nextState = addCharToSearch(state, 'helloP')
            expect(nextState).to.equal(Map({
                yelpSearchVal: "helloP"
            }))
        })
    })

    describe('setListings', () => {
        it('should set the received listings onto state.listings', () => {
            const state = Map({
                listings: List()
            })
            const listings = List.of(
                Map({ place: 'Boat House' }), Map({ place: 'The Gate' })
            )
            const nextState = setListings(state, listings)

            expect(nextState.get('listings')).to.equal(listings)
        })

        it('should handle the case where no listing attribute is defined', () => {
            const listings = List.of(
                Map({ place: 'Boat House' }), Map({ place: 'The Gate' })
            )
            const nextState = setListings(Map(), listings)
            expect(nextState.get('listings')).to.equal(listings)
        })

        it('should convert js to immutable', () => {
            const listings = [{ place: 'Boat House' },{ place: 'The Gate' }]
            const nextState = setListings(Map(), listings)
            expect(nextState.get('listings')).to.equal(List.of(
                Map({ place: 'Boat House' }), Map({ place: 'The Gate' })
            ))
        })

        it('should replace existing listings with a new set', () => {
            const state = Map({
                listings: [{ place: 'Boat House' }, { place: 'The Gate' }]
            })
            const listings = [{ place: 'The Thorntree' }, { place: 'The White Lion' }]
            const nextState = setListings(state, listings)

            expect(nextState.get('listings'))
                .to.equal(fromJS(listings))
        })
    })

    describe('setVotesOnListing', () => {
        it('should add a votes attribute to a listing element', () => {
            const listingState = List.of(Map({id: 'a'}), Map({id: 'b', votes: 3}))
            const nextState = setVotesOnListing(listingState, 'a', 1)
            expect(nextState).to.equal(fromJS([{ id: 'a', votes: 1 }, { id: 'b', votes: 3 }]))
        })

        it('should change the votes attribute on a listing element', () => {
            const listingState = fromJS([{ id: 'a' }, { id: 'b', votes: 3 }])
            const nextState = setVotesOnListing(listingState, 'b', 4)
            expect(nextState).to.equal(fromJS([{ id: 'a' }, { id: 'b', votes: 4 }]))
        })
    })

    describe('setIsGoingOnListing', () => {
        it('should add an isGoing attribute to a listing element', () => {
            const listingState = fromJS([{ id: 'a' }, { id: 'b', votes: 3 }])
            const nextState = setIsGoingOnListing(listingState, 'b', true)
            expect(nextState).to.equal(fromJS([{ id: 'a' }, { id: 'b', votes: 3, isGoing: true }]))
        })
        it('should add set an isGoing element to false when status is false', () => {
            const listingState = fromJS([{ id: 'a' }, { id: 'b', votes: 3, isGoing: true }])
            const nextState = setIsGoingOnListing(listingState, 'b', false)
            expect(nextState).to.equal(fromJS([{ id: 'a' }, { id: 'b', votes: 3, isGoing: false }]))

        })
    })

})
