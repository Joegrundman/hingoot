import {connect} from 'react-redux'
import {addCharToSearch, setAjaxFail, fetchListings} from '../../store/actions'
import Search from './Search'

const mapStateToProps = (state) => {
    return {
       isFetching: state.getIn(['flags', 'isFetching']),
       ajaxFail: state.getIn(['flags', 'ajaxFail']),
       yelpSearchVal: state.get('yelpSearchVal')
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {isFetching, ajaxFail, yelpSearchVal} = stateProps
    const {dispatch} = dispatchProps
    const {} = ownProps

    return {
        ...stateProps,
        ...ownProps,
        onSearchChange: (e) => {
            dispatch(addCharToSearch(e.target.value))
        },
        onSearchClick: () => {
            const query = yelpSearchVal
            if(query === '') { return }
            dispatch(setAjaxFail(false))
            dispatch(fetchListings(query))
        }
    }
}

const SearchContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(Search)

export default SearchContainer