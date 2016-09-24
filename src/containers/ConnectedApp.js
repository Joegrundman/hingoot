import {connect} from 'react-redux'
import App from '../components/App/AppComp'


const mapStateToProps = (state) => {
    return {
        pristine: state.getIn(['flags', 'pristine']),
        showHelp: state.getIn(['flags', 'pristine']),
    }
}

const ConnectedApp = connect(
    mapStateToProps
)(App)

export default ConnectedApp