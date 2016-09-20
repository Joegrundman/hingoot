import React, { Component } from 'react';
import Search from '../Search/Search'
import ListingHolder from '../ListingHolder/ListingHolder'
import Navbar from '../Navbar/Navbar'
import Help from '../Help/Help'
import YelpLogo from '../YelpLogo/YelpLogo'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pristine:true,
      isLoggedIn: false,
      needsAuth: true,
      fbAuth: false ,
      showHelp: false    
    }

    this.toggleAllowUnauth = this.toggleAllowUnauth.bind(this)
    this.toggleShowHelp = this.toggleShowHelp.bind(this)
    this.removeListings = this.removeListings.bind(this)
    this.handleSearchResults = this.handleSearchResults.bind(this)
    this.handleFbLogin = this.handleFbLogin.bind(this)
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

  handleFbLogin () {
    this.setState({
      isLoggedIn: true,
      needsAuth: false,
      fbAuth: true
      })
  }

  toggleAllowUnauth() {
    this.setState({
      needsAuth: !this.state.needsAuth
    })
  }

    toggleShowHelp() {
        this.setState({
            showHelp: ! this.state.showHelp
        })
    }

  handleSearchResults(data) {
    var places
    // remove tempdata possiblity for production
    if (!data) {
      places = this.props.tempData
    } else {
      places = data.data
    }
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
                toggleShowHelp={this.toggleShowHelp}
                needsAuth={this.state.needsAuth}
                isLoggedIn={this.state.isLoggedIn}/>

        <h2>Fae ya gannin oot 'e neet ya hingoot?</h2>
        <h5>Your Scottish Nightlife Coordinator</h5>
        {this.state.showHelp ? <Help 
              isOpen={this.state.showHelp} 
              toggleShowHelp={this.toggleShowHelp}
              /> : ''}
        <Search 
          onGetSearchResults={this.handleSearchResults}
          removeListings={this.removeListings} />
        <br />
        {this.state.pristine ? '': <ListingHolder 
                                      results={this.state.results} 
                                      needsAuth={this.state.needsAuth} 
                                      onFbLogin={this.handleFbLogin}
                                      toggleAllowUnauth={this.toggleAllowUnauth}
                                      fbAuth={this.state.fbAuth} />}
      
        <br />
        <br />
        <YelpLogo />
      </div>
    )
  }
}

export default App


