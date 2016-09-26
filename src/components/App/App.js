import React, {PropTypes} from 'react';
import SearchContainer from '../Search/SearchContainer'
import ListingHolderContainer from '../ListingHolder/ListingHolderContainer'
import NavbarContainer from '../Navbar/NavbarContainer'
import HelpContainer from '../Help/HelpContainer'
import YelpLogo from '../YelpLogo/YelpLogo'
import './App.css'


const AppComp = ({showListings}) => (
      <div className="App">
        <NavbarContainer />
        <h2>Fae ya gannin oot 'e neet ya hingoot?</h2>
        <h5>Your Scottish Nightlife Coordinator</h5>
        <HelpContainer />
        <SearchContainer  />
        <br />
        {showListings ? <ListingHolderContainer  /> : null}    
        <br />
        <br />
        <YelpLogo />
      </div>
    )


AppComp.propTypes = {
    showListings: PropTypes.bool.isRequired
}

AppComp.defaultProps = {
  showListings: false
}

export default AppComp


