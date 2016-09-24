import React, {PropTypes} from 'react';
// import Search from '../Search/SearchComp'
import ConnectedSearch from '../../containers/ConnectedSearch'
// import ListingHolder from '../ListingHolder/ListingHolder'
// import Navbar from '../Navbar/NavbarComp'
// import Help from '../Help/Help'
import YelpLogo from '../YelpLogo/YelpLogo'
import './App.css'

// class App extends Component {
//   constructor(props) {
//     super(props)

    // this.state = {
    //   pristine:true,
    //   isLoggedIn: false,
    //   needsAuth: true,
    //   fbAuth: false ,
    //   showHelp: false    
    // }

    // this.toggleAllowUnauth = this.toggleAllowUnauth.bind(this)
    // this.toggleShowHelp = this.toggleShowHelp.bind(this)
    // this.removeListings = this.removeListings.bind(this)
    // this.handleSearchResults = this.handleSearchResults.bind(this)
    // this.handleFbLogin = this.handleFbLogin.bind(this)
 // }

//   componentDidMount () {
//     if(window.localStorage['hingoot-fbloggedin']){
//     //   const fbAuth = JSON.parse(window.localStorage['hingoot-fbloggedin'])
//       this.setState({ fbAuth })
//     } else {
//       this.setState({fbAuth: false})
//     }
// }

//   removeListings () {
//     this.setState({
//       pristine: true
//     })
//   }

  // handleFbLogin () {
  //   this.setState({
  //     isLoggedIn: true,
  //     needsAuth: false,
  //     fbAuth: true
  //     })
  // }

  // toggleAllowUnauth() {
  //   this.setState({
  //     needsAuth: !this.state.needsAuth
  //   })
  // }

  //   toggleShowHelp() {
  //       this.setState({
  //           showHelp: ! this.state.showHelp
  //       })
  //   }

  // handleSearchResults(data) {
  //   var places
  //   // remove tempdata possiblity for production
  //   if (!data) {
  //     places = this.props.tempData
  //   } else {
  //     places = data.data
  //   }
  //   this.setState({
  //       pristine: false,
  //       results: places
  //   }) 
  // }

//   render() {
//     return (
//       <div className="App">
//         <Navbar title="Hingoot" />

//         <h2>Fae ya gannin oot 'e neet ya hingoot?</h2>
//         <h5>Your Scottish Nightlife Coordinator</h5>
//         {this.props.showHelp ? <Help isOpen={this.props.showHelp} /> : ''}
//         <Search  />
//         <br />
//         {this.state.pristine ? '': <ListingHolder  results={this.props.results}  />}
      
//         <br />
//         <br />
//         <YelpLogo />
//       </div>
//     )
//   }
// }

const Navbar = () => (<h2> THIS IS A NAVBAR </h2>)
// const Search = () => (<h2> THIS IS A SEARCHBAR </h2>)
const Help = () => (<h2> THIS IS A HELP PAGE </h2>)


const ListingHolder =( <h2> This is a ListingHolder </h2>)

const AppComp = ({pristine, showHelp}) => (
      <div className="App">
        <Navbar />
        <h2>Fae ya gannin oot 'e neet ya hingoot?</h2>
        <h5>Your Scottish Nightlife Coordinator</h5>
        {showHelp ? <Help /> : ''}
        <ConnectedSearch  />
        <br />
        {pristine ? '': <ListingHolder  />}    
        <br />
        <br />
        <YelpLogo />
      </div>
    )


AppComp.propTypes = {
    pristine: PropTypes.bool.isRequired,
    showHelp: PropTypes.bool.isRequired,
}

AppComp.defaultProps = {
  pristine: true,
  showHelp: false
}

export default AppComp


