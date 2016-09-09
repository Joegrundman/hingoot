import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import FlatButton from 'material-ui/FlatButton'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import Listing from './Listing'

describe('<Listing />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Listing />)
    })
    it('should render a <Listing> component' , () => {
        expect(wrapper).to.be.ok
    })
    it('should show two FlatButtons', () => {
        expect(wrapper.find(FlatButton)).to.have.length(2)
    })
    it('should show one Card', () => {
        expect(wrapper.find(Card)).to.have.length(1)
    })
})
