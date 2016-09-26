import {connect} from 'react-redux'
import ListingHolder from './ListingHolder'

const mapStateToProps = (state) => {
    return {
        listings: state.get('listings')
    }
}


const ListingHolderContainer = connect(
    mapStateToProps
)(ListingHolder)

export default ListingHolderContainer