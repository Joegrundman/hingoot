import {connect} from 'react-redux'
import {addCharToSearch, searchYelp} from '../../store/actions'
import Search from './SearchComp'

const mapStateToProps = (state) => {
    return {
       loadingAjax: state.loadingAjax,
       ajaxFail: state.ajaxFail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (e) => {
            dispatch(addCharToSearch(e))
        },
        onSearchClick: () => {
            dispatch(searchYelp())
        }
    }
}

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)

export default SearchContainer