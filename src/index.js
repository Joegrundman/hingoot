import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin  from 'react-tap-event-plugin'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
// import App from './components/App/App';
// import AppComp from './components/App/AppComp';
import AppContainer from './components/App/AppContainer';
// import ConnectedApp from './containers/ConnectedApp';
import reducer from './store/reducer'
import {withActionLogging} from './store/middleware'
import './index.css';
// import tempData from './tempdata'

injectTapEventPlugin()

const createStoreWithMiddleware = applyMiddleware(
  withActionLogging
)(createStore)

const store = createStoreWithMiddleware(reducer)

const MainApp = () => (

    <MuiThemeProvider>
      <Provider store={store} >
        <AppContainer />
      </Provider>
    </MuiThemeProvider>
 
)


const mountNode = document.getElementById('root')

ReactDOM.render(<MainApp />,  mountNode);
