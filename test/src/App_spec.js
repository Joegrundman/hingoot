// import React from 'react'
// import { expect } from 'chai'
// import { mount, shallow } from 'enzyme'
// import App from '../../src/App'

// describe('<App />', () => {
//     it('calls componentDidMount', () => {
//         const wrapper = mount(<App />)
//         expect(App.prototype.componentDidMount.calledOnce).to.equal(true)
//     })
// })

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { 
//     renderIntoDocument,
//     scryRenderedDOMComponentsWithTag
//  } from 'react-addons-test-utils'
// import { expect } from 'chai'
// import muiTheme from 'material-ui/styles/baseThemes/lightBaseTheme' 
// import App from '../../src/App'

// describe('<App />', () => {
//     it('renders a search bar', () => {
//         const component = renderIntoDocument(
//             <App />, {context: {muiTheme}}
//         )

//         const searchBar = scryRenderedDOMComponentsWithTag(component, 'Search')
//         expect(searchBar.length).to.equal(1)
//     })
// })