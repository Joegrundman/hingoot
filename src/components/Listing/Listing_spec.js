import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import FlatButton from 'material-ui/FlatButton'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import Listing from './Listing'

describe('<Listing />', () => {
    let wrapper
    const mockFunc = () => {console.log('testfunc fired')}
    const mockStats = {
            snippet_img_url: 'imgurl',
            name: 'a place',
            votes: 0,
            snippet_text: 'great place',
            url: 'url'
        }
    
    beforeEach(() => {
        wrapper = shallow(<Listing stats={mockStats} handleListingClick={mockFunc} />)
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
