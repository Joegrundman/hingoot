import React from 'react'
import Listing from '../Listing/Listing'
import './ListingContainer.css'

class ListingContainer extends React.Component {

    render () {

     let listings = this.props.results.map((res, i) => (
        <Listing 
          key={i} 
          img={res.snippet_image_url}
          url="{res.url}"
          name={res.name} 
          snippet={res.snippet_text}/>))

        return (
            <div className="ListingContainer">
                {listings}
            </div>
        )
    }
}

export default ListingContainer