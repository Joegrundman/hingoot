import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import ListingHolder from './ListingHolder'
import Listing from '../Listing/ListingContainer'

describe('<ListingHolder />', () => {
    let wrapper
    let listings = ['a', 'b']
    beforeEach(() => {
        wrapper = shallow(<ListingHolder listings={listings}/>)
    })

    it('should render a <ListingHolder> component', () => {
        expect(wrapper).to.be.ok
    })
    it('should render a <Listing/> component for each element in the results array', () => {
        expect(wrapper.find(Listing)).to.have.length(listings.length)
    })

})