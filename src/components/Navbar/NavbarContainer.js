import {connect} from 'react-redux'
import Navbar from './NavbarComp'
import {toggleAllowUnauth, toggleShowHelp} from '../../store/actions'

const mapStateToProps = (state) => {
    return {
        needsAuth: state.getIn(['flags', 'needsAuth'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleAllowUnauth: () => {
            dispatch(toggleAllowUnauth())
        },
        toggleShowHelp: () => {
            dispatch(toggleShowHelp())
        }
    }
}

const NavbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)

export default NavbarContainer