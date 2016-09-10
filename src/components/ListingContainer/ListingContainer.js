import React from 'react'
import Listing from '../Listing/Listing'
import './ListingContainer.css'

class ListingContainer extends React.Component {

    render () {

     let listings = this.props.results.map((res, i) => (
        <Listing 
          key={i} 
          stats={res} 
        />))

        return (
            <div className="ListingContainer">
                {listings}
            </div>
        )
    }
}

export default ListingContainer