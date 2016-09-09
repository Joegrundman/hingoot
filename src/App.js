import React, { Component } from 'react';
// import logo from './logo.svg';
import Search from './components/Search/Search'
import ListingContainer from './components/ListingContainer/ListingContainer'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pristine:true     
    }

    this.handleSearchResults = this.handleSearchResults.bind(this)
  }

  componentDidMount(){
    console.log('component did mount called')
  }

  handleSearchResults(data) {
    var places

    if (!data) {
      places = this.props.tempData
    } else {
      places = data.data
    }
  
    console.log(places)
    places.forEach(d => console.log(d))
    this.setState({
      pristine: false,
      results: places
    })
  }

  render() {
    //var img = '<img src={logo} className="App-logo" alt="logo" />'
 
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Fae ya gannin oot 'e neet ya hingoot?</h2>
        <h5>Your Scottish Nightlife Coordinator</h5>
        <Search onGetSearchResults={this.handleSearchResults}/>
        <br />
        {this.state.pristine ? '': <ListingContainer results={this.state.results} />}
      </div>
    )
  }
}

export default App
