import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import YelpLogo from './YelpLogo'

describe('<YelpLogo />', () => {
    it('should render a YelpLogo component', () => {
        const wrapper = shallow(<YelpLogo />)

        expect(wrapper).to.be.ok
    })
})