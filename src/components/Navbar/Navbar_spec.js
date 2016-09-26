import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Navbar from './Navbar'

describe('<Navbar/>', () => {
    let wrapper
    const mockFunc = () => console.log('mockfunc called')
    beforeEach(() => {
        wrapper =  shallow(<Navbar toggleAllowUnauth={mockFunc} toggleShowHelp={mockFunc}/>)
    })

    it('should render a <Navbar/> component', () => {
        expect(wrapper).to.be.ok
    })
})