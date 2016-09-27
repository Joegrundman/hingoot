import React, {PropTypes} from 'react'
import ListingContainer from '../Listing/ListingContainer'
import './ListingHolder.css'

/**
 * ListingHolder is container for Lists. The data from yelp has to be injected here and mapped onto the listings
 */

const ListingHolder = ({listings}) => (
    <div className="ListingHolder">
        {listings.map((listing, i) => (
            <ListingContainer key={i} stats={listing} />)
        )}
    </div>
)

ListingHolder.propTypes = {
    listings: PropTypes.object,
}

export default ListingHolder
