import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import ListingContainer from './ListingContainer'
import Listing from '../Listing/Listing'

describe('<ListingContainer />', () => {
    let wrapper
    let results = ['a', 'b']
    beforeEach(() => {
        wrapper = shallow(<ListingContainer results={results}/>)
    })

    it('should render a <ListingContainer> component', () => {
        expect(wrapper).to.be.ok
    })
    it('should render a <Listing/> component for each element in the results array', () => {
        expect(wrapper.find(Listing)).to.have.length(results.length)
    })

})