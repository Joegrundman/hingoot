import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import App from './App'
import SearchContainer from '../Search/SearchContainer'
import NavbarContainer from '../Navbar/NavbarContainer'
import HelpContainer from '../Navbar/NavbarContainer'

describe('<App />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    it('should render an <App /> component', () => {
        expect(wrapper).to.be.ok
    })
    it('should have a single <SearchContainer/> component', () => {
        expect(wrapper.find(SearchContainer)).to.have.length(1)
    })
    it('should have a single <NavbarContainer/> component', () => {
        expect(wrapper.find(NavbarContainer)).to.have.length(1)
    })
    it('should have a single <HelpContainer/> component', () => {
        expect(wrapper.find(HelpContainer)).to.have.length(1)
    })
})