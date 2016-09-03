import React, { Component } from 'react';
import logo from './logo.svg';
import Search from './components/Search/Search'
import Listing from './components/Listing/Listing'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pristine:true
    }
  }

  render() {

    if (!this.state.pristine) {
      let results = this.state.results
      let listings = results.map(res => (<Listing />))
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Search />
        <br />
        {this.state.pristine ? '': listings}
      </div>
    );
  }
}

export default App;
