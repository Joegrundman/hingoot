import React, { Component } from 'react';
import Search from './components/Search/Search'
import ListingContainer from './components/ListingContainer/ListingContainer'
import Navbar from './components/Navbar/Navbar'
import YelpLogo from './components/YelpLogo/YelpLogo'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pristine:true     
    }

    this.removeListings = this.removeListings.bind(this)
    this.handleSearchResults = this.handleSearchResults.bind(this)
  }

  componentDidMount(){
    console.log('component did mount called')
  }

  removeListings () {
    this.setState({
      pristine: true
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
    //remove this for production
   // places.forEach(d => console.log(d))
   this.setState({
      pristine: false,
      results: places
    })
 
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Hingoot"/>
        <h2>Fae ya gannin oot 'e neet ya hingoot?</h2>
        <h5>Your Scottish Nightlife Coordinator</h5>
        <Search 
          onGetSearchResults={this.handleSearchResults}
          removeListings={this.removeListings} />
        <br />
        {this.state.pristine ? '': <ListingContainer results={this.state.results} />}
      
        <br />
        <br />
        <YelpLogo />
      </div>
    )
  }
}

export default App
