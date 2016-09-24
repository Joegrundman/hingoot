import {connect} from 'react-redux'
import ListingHolder from '../componentes/ListingHolder/ListingHolderComp'

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = () => {
    return {

    }
}

const ConnectedListingHolder = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListingHolder)

export default ConnectedListingHolder