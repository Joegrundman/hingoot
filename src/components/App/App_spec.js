import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import App from './App'
import Search from '../Search/Search'
import Navbar from '../Navbar/Navbar'

describe('<App />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    it('should render an <App /> component', () => {
        expect(wrapper).to.be.ok
    })
    it('should have a single <Search/> component', () => {
        expect(wrapper.find(Search)).to.have.length(1)
    })
    it('should have a single <Navbar/> component', () => {
        expect(wrapper.find(Navbar)).to.have.length(1)
    })
})