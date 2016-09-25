import React, {PropTypes} from 'react'
import Listing from '../Listing/ListingComp'
import './ListingHolder.css'

/**
 * ListingHolder is container for Lists. The data from yelp has to be injected here and mapped onto the listings
 */

const ListingHolder = ({listings}) => (
    <div className="ListingHolder">
        {listings.map((listing, i) => (
            <Listing key={i} stats={listing} />)
        )}
    </div>
)

ListingHolder.propTypes = {
    listings: PropTypes.array,
}

export default ListingHolder
