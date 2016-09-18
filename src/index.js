import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin  from 'react-tap-event-plugin'
import App from './components/App/App';
import './index.css';
import tempData from './tempdata'

injectTapEventPlugin()


const MainApp = () => (
    <MuiThemeProvider>
      <App tempData={tempData} />
    </MuiThemeProvider>
)

const mountNode = document.getElementById('root')

ReactDOM.render(<MainApp />,  mountNode);
