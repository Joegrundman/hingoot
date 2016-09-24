import {connect} from 'react-redux'
import {toggleShowHelp} from '../../store/actions'
import Help from './Help'

const mapStateToProps = (state) => {
    return {
        showHelp: state.getIn(['flags', 'showHelp'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // handleCloseHelp: () => {
        //     window.setTimeout(() => {
        //         dispatch(toggleShowHelp())
        //     }, 1000)
        // }
        handleCloseHelp: () => {
            dispatch(toggleShowHelp())
        }
    }
}

const HelpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Help)

export default HelpContainer