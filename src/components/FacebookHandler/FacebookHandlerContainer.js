import {connect} from 'react-redux'
import {setFbDialogToOpen, toggleAllowUnauth} from '../../store/actions'
import FacebookHandler from './FacebookHandlerComp'

const mapStateToProps = state => {
    return {
        facebookDialogIsOpen: state.getIn(['flags', 'facebookDialogIsOpen'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        responseFacebook: (response) => {
            if (response.accessToken) {
                console.log("Yo we're in")
                dispatch(setFbDialogToOpen(false))
                dispatch(toggleAllowUnauth())
            } else if (response.status && response.status === "not authorized"){
                console.log("access denied")
            } else {
                console.log("error connecting to facebook")
            }
        },
        toggleAllowUnauth: () => {
            dispatch(toggleAllowUnauth())
        },
        handleFbDialogClose: () => {
            dispatch(setFbDialogToOpen(false))
        }
    }
}

const FacebookHandlerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FacebookHandler)

export default FacebookHandlerContainer