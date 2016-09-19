import React, { Component } from 'react';
import Search from '../Search/Search'
import ListingHolder from '../ListingHolder/ListingHolder'
import Navbar from '../Navbar/Navbar'
import YelpLogo from '../YelpLogo/YelpLogo'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pristine:true,
      isLoggedIn: false,
      needsAuth: true,
      fbAuth: false     
    }

    this.toggleAllowUnauth = this.toggleAllowUnauth.bind(this)
    this.removeListings = this.removeListings.bind(this)
    this.handleSearchResults = this.handleSearchResults.bind(this)
  }

  componentDidMount () {
    if(window.localStorage['hingoot-fbloggedin']){
      const fbAuth = JSON.parse(window.localStorage['hingoot-fbloggedin'])
      this.setState({ fbAuth })
    } else {
      this.setState({fbAuth: false})
    }
  }

  removeListings () {
    this.setState({
      pristine: true
    })
  }

  logoutFacebook () {
    console.log('logging out of facebook')
  }

  toggleAllowUnauth() {
    this.setState({
      needsAuth: !this.state.needsAuth
    })
  }

  handleSearchResults(data) {
    var places
    // remove tempdata possiblity for production
    if (!data) {
      console.log('using tempdata')
      places = this.props.tempData
      console.log('places', places)

    } else {
      places = data.data
    }
    //remove this for production
    places.forEach(d => console.log(d))
    this.setState({
        pristine: false,
        results: places
    }) 
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Hingoot" 
                toggleAllowUnauth={this.toggleAllowUnauth} 
                logoutFacebook={this.logoutFacebook}
                needsAuth={this.state.needsAuth}
                isLoggedIn={this.state.isLoggedIn}/>

        <h2>Fae ya gannin oot 'e neet ya hingoot?</h2>
        <h5>Your Scottish Nightlife Coordinator</h5>
        <Search 
          onGetSearchResults={this.handleSearchResults}
          removeListings={this.removeListings} />
        <br />
        {this.state.pristine ? '': <ListingHolder 
                                      results={this.state.results} 
                                      needsAuth={this.state.needsAuth} 
                                      fbAuth={this.state.fbAuth} />}
      
        <br />
        <br />
        <YelpLogo />
      </div>
    )
  }
}

export default App


