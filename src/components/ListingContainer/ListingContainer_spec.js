import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import ListingContainer from './ListingContainer'

describe('<ListingContainer />', () => {
    let wrapper
    let results = ['a']
    beforeEach(() => {
        wrapper = shallow(<ListingContainer results={results}/>)
    })

    it('should render a <ListingComponent>', () => {
        expect(wrapper).to.be.ok
    })

})