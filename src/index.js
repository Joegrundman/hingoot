import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin  from 'react-tap-event-plugin'
import {Provider} from 'react-redux'
import AppContainer from './components/App/AppContainer';
import './index.css';
import store from './store/store'

injectTapEventPlugin()

const MainApp = () => (
    <MuiThemeProvider>
      <Provider store={store} >
        <AppContainer />
      </Provider>
    </MuiThemeProvider>
)

const mountNode = document.getElementById('root')

ReactDOM.render(<MainApp />,  mountNode);
