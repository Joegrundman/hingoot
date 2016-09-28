import {connect} from 'react-redux'
import {handleListingClick, setFbDialogToOpen, toggleAllowUnauth} from '../../store/actions'
import Listing from './Listing'

const mapStateToProps = (state) => {
    return {
        showFacebook: state.getIn(['flags', 'facebookDialogIsOpen']),
        allowUnauth: state.getIn(['flags', 'allowUnauth'])

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.stats.get('id')
    const votes = ownProps.stats.get('votes')
    const isGoing = ownProps.stats.get('isGoing')
    return {
        handleListingClick: (e) => {
            e.preventDefault()
            dispatch(handleListingClick(id, votes, isGoing))
        },
        toggleShowFacebook: () => {
            dispatch(setFbDialogToOpen(true))
        }
    }
}

const ListingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Listing)

export default ListingContainer