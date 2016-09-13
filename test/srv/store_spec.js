const Immutable = require('immutable')
const expect = require('chai').expect
const makeStore = require('../../app/rdx/store')
const actions = require('../../app/rdx/action_creators')
const addEntry = actions.addEntry
const increment = actions.increment
const List = Immutable.List
const Map = Immutable.Map
const fromJS = Immutable.fromJS

// import {addEntry, increment} from '../../app/rdx/action_creators'
// import makeStore from '../../app/rdx/store'

describe('the store', () => {
    it('should exist', () => {
        const store = makeStore()
        expect(store).to.be.ok
    })

    it('is a redux store configured with the correct reducer', () => {
        const store = makeStore()
        expect(store.getState()).to.equal(List())

        store.dispatch(addEntry("The Thorntree"))
        store.dispatch(addEntry("The White Lion"))
        store.dispatch(increment("The Thorntree"))
        store.dispatch(increment("The Thorntree"))
        store.dispatch(increment("The White Lion"))
        store.dispatch(increment("The White Lion"))
        store.dispatch(increment("The White Lion"))
        expect(store.getState()).to.equal(fromJS([
            {
                place: "The Thorntree",
                votes: 3
            },
            {
                place: "The White Lion",
                votes: 4
            }
        ]))

    })
})