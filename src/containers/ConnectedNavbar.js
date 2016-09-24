import {connect} from 'react-redux'
import Navbar from '../components/Navbar/NavbarComp'
import {toggleAllowUnauth, toggleShowHelp} from '../store/actions'

const mapStateToProps = () => {
    return {
        needsAuth: state.needsAuth,
        isLoggedIn: state.isLoggedIn
    }
 
}

const mapDispatchToProps = () => {
    return {
        toggleAllowUnauth: () => {
            dispatch(toggleAllowUnauth())
        },
        toggleShowHelp: () => {
            dispatch(toggleShowHelp())
        }
    }
}

const ConnectedNavbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)

export default Navbar