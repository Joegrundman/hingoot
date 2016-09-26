import {connect} from 'react-redux'
import {handleListingClick} from '../../store/actions'
import Listing from './Listing'

const mapStateToProps = (state) => {
    return {
        showFacebook: state.getIn(['flags', 'showFacebook'])
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleListingClick: (e) => {
            e.preventDefault()
            dispatch(handleListingClick(ownProps.stats.id, ownProps.stats.votes, ownProps.stats.isGoing))
        }
    }
}

const ListingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Listing)

export default ListingContainer