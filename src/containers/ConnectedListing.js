import {connect} from 'react-redux'
import {toggleAllowUnauth, onFbLogin} from '../store/actions'
import Listing from '../components/Listing/ListingComp'

const mapStateToProps = (state) => {
    return {
        showFacebook: state.showFacebook,
        needsAuth: state.needsAuth,
        fbAuth: state.fbAuth
    }
}

const mapDispatchToProps = (state) => {
    return {
        toggleAllowUnauth: () => {
            dispatch(toggleAllowUnauth())
        },
        onFbLogin: () => {
            dispatch(onFbLogin())
        }
    }
}

const ConnectedListing = connect(
    mapStateToProps,
    mapDispatchToProps
)(Listing)