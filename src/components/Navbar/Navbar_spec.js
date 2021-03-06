import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Navbar from './Navbar'

describe('<Navbar/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper =  shallow(<Navbar />)
    })

    it('should render a <Navbar/> component', () => {
        expect(wrapper).to.be.ok
    })
})