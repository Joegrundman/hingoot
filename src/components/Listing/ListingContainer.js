import {connect} from 'react-redux'
import {handleListingClick} from '../../store/actions'
import Listing from './ListingComp'

const mapStateToProps = (state) => {
    return {
        showFacebook: state.getIn(['flags', 'showFacebook'])
    }
}

const mapDispatchToProps = (state, ownProps) => {
    return {
        handleListingClick: () => {
            dispatch(handleListingClick(ownProps.stats.id))
        }
    }
}

const ConnectedListing = connect(
    mapStateToProps,
    mapDispatchToProps
)(Listing)