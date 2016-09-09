import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import App from './App'
import Search from './components/Search/Search'

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
})