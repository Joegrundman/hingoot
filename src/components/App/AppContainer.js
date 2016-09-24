import {connect} from 'react-redux'
import App from './AppComp'


const mapStateToProps = (state) => {
    return {
        pristine: state.getIn(['flags', 'pristine']),
        showHelp: state.getIn(['flags', 'pristine']),
    }
}

const AppContainer = connect(
    mapStateToProps
)(App)

export default AppContainer