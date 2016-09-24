import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin  from 'react-tap-event-plugin'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// import App from './components/App/App';
// import AppComp from './components/App/AppComp';
import ConnectedApp from './containers/ConnectedApp';
import reducer from './store/reducer'
import './index.css';
// import tempData from './tempdata'

injectTapEventPlugin()

const store = createStore(reducer)

const MainApp = () => (

    <MuiThemeProvider>
      <Provider store={store} >
        <ConnectedApp />
      </Provider>
    </MuiThemeProvider>
 
)

// const MainApp = () => (
//   <AppComp />
// )

const mountNode = document.getElementById('root')

ReactDOM.render(<MainApp />,  mountNode);
