import React, { Component } from 'react';
import Search from '../Search/Search'
import ListingHolder from '../ListingHolder/ListingHolder'
import Navbar from '../Navbar/Navbar'
import YelpLogo from '../YelpLogo/YelpLogo'
import './App.css'
// import {setListings} from '../../store/actions'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pristine:true,
      isLoggedIn: false,
      allowUnauthorised: false     
    }

    this.toggleAllowUnauth = this.toggleAllowUnauth.bind(this)
    this.removeListings = this.removeListings.bind(this)
    this.handleSearchResults = this.handleSearchResults.bind(this)
  }

  removeListings () {
    this.setState({
      pristine: true
    })
  }

  toggleAllowUnauth() {
    this.setState({
      allowUnauthorised: !this.state.allowUnauthorised
    })
  }

  handleSearchResults(data) {
    var places
    // remove tempdata possiblity for production
    if (!data) {
      console.log('using tempdata')
      places = this.props.tempData
      console.log('places', places)
      // store.dispatch({
      //   type: 'SET_LISTINGS',
      //   listings: this.props.tempData
      // })

    } else {
      places = data.data
      // store.dispatch({
      //   type: 'SET_LISTINGS',
      //   listings: data.data
      // })
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
        <Navbar title="Hingoot" allowUnauth={this.toggleAllowUnauth} isAuth={this.state.allowUnauthorised}/>
        <div
          class="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true">
        </div>
        <h2>Fae ya gannin oot 'e neet ya hingoot?</h2>
        <h5>Your Scottish Nightlife Coordinator</h5>
        <Search 
          onGetSearchResults={this.handleSearchResults}
          removeListings={this.removeListings} />
        <br />
        {this.state.pristine ? '': <ListingHolder results={this.state.results} />}
      
        <br />
        <br />
        <YelpLogo />
      </div>
    )
  }
}

export default App


