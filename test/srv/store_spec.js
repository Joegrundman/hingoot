import {List, Map, fromJS} from 'immutable'
import {expect} from 'chai'

import {addEntry, increment} from '../../app/rdx/action_creators'
import makeStore from '../../app/rdx/store'

describe('the store', () => {
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