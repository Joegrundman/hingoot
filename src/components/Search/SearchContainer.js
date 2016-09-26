import {connect} from 'react-redux'
import {addCharToSearch, setAjaxFail, fetchListings} from '../../store/actions'
import Search from './Search'

const mapStateToProps = (state) => {
    return {
       isFetching: state.getIn(['flags', 'isFetching']),
       ajaxFail: state.getIn(['flags', 'ajaxFail'])
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearchChange: (e) => {
            dispatch(addCharToSearch(e.target.value))
        },
        onSearchClick: (e) => {
            if(ownProps.ajaxFail){
                dispatch(setAjaxFail(false))
            }
            dispatch(fetchListings())
        }
    }
}

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)

export default SearchContainer