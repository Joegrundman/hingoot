import React from 'react'
import ReactDOM from 'react-dom'
import { 
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
 } from 'react-addons-test-utils'
import { expect } from 'chai'
import muiTheme from 'material-ui/styles/baseThemes/lightBaseTheme' 
import Listing from '../../src/components/Listing/Listing'


describe('<Listing />', () => {
    it('renders a Listing component', () => {
        const component = renderIntoDocument(
            <Listing />, {context: { muiTheme }}
        )
        const flatButtons = scryRenderedDOMComponentsWithTag(component, 'FlatButton')

        expect(flatButtons.length).to.equal(2)
    })
})