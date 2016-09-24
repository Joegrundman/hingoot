import {connect} from 'react-redux'
import {} from '../store/actions'
import App from '../components/App/AppComp'

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = () => {
    return {

    }
}

const ConnectedApp = (
    mapStateToProps,
    mapDispatchToProps
)(App)

export default ConnectedApp