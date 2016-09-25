import {connect} from 'react-redux'
import App from './AppComp'


const mapStateToProps = (state) => {
    return {
        showListings: state.getIn(['flags', 'showListings'])
    }
}

const AppContainer = connect(
    mapStateToProps
)(App)

export default AppContainer