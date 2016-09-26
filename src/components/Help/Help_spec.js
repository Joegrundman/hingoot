import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import Help from './Help'

describe('<Help />', () => {
    let wrapper
    const handleCloseHelp = () => console.log('closing help')
    
    beforeEach(() => {

        wrapper = shallow(<Help handleCloseHelp={handleCloseHelp} />)
    })
    it('should render a Help component', () => {
        expect(wrapper).to.be.ok
    })
})