import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin  from 'react-tap-event-plugin'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import AppContainer from './components/App/AppContainer';
import reducer from './store/reducer'
import './index.css';

const isDev = process.env.NODE_ENV === "development"

injectTapEventPlugin()


var loggerMiddleware = createLogger()
if (!isDev) {loggerMiddleware = state => next => action => next(action)}
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
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
