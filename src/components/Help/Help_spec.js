import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import Help from './Help'

describe('<Help />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Help />)
    })
    it('should render a Help component', () => {
        expect(wrapper).to.be.ok
    })
})