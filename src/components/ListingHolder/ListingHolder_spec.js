import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import ListingHolder from './ListingHolder'
import Listing from '../Listing/Listing'

describe('<ListingHolder />', () => {
    let wrapper
    let results = ['a', 'b']
    beforeEach(() => {
        wrapper = shallow(<ListingHolder results={results}/>)
    })

    it('should render a <ListingHolder> component', () => {
        expect(wrapper).to.be.ok
    })
    it('should render a <Listing/> component for each element in the results array', () => {
        expect(wrapper.find(Listing)).to.have.length(results.length)
    })

})