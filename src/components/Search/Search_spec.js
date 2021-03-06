import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import RaisedButton from 'material-ui/RaisedButton'
import Search from './Search'

describe('<Search />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Search />)
    })
    it('should render a <Search /> component', () => {
        expect(wrapper).to.be.ok
    })
    it('should have a single RaisedButton', () => {
        expect(wrapper.find(RaisedButton)).to.have.length(1)
    })
})