import {connect} from 'react-redux'
import Navbar from './Navbar'
import {toggleAllowUnauth, toggleShowHelp} from '../../store/actions'

const mapStateToProps = (state) => {
    return {
        allowUnauth: state.getIn(['flags', 'allowUnauth'])
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