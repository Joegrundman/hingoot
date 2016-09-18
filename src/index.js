import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin  from 'react-tap-event-plugin'
// import {createStore, applyMiddleware} from 'redux'
// import {Provider} from 'react-redux'
// import remoteActionMiddleware from './store/remote_action_middleware'
import App from './components/App/App';
// import AppContainer from './components/App/AppContainer';
// import reducer from './store/reducer'
import './index.css';
import tempData from './tempdata'

injectTapEventPlugin()

// const createStoreWithMiddleware = applyMiddeware(
//   remoteActionMiddleware
// )(createStore)

// const store = createStoreWithMiddleware(reducer)

// store.dispatch({
//   type: 'SET_LISTINGS',
//   listings: tempData
// })
// store.dispatch({
//   type: 'SET_LISTINGS',
//   listings:
//        [
//             {
//                 place: "Boat House",
//                 votes: 4
//             },
//             {
//                 place: "The Railway",
//                 votes: 3
//             },
//             {
//                 place: "The Gate",
//                 votes: 0
//             }
//         ]   

// })

// const MainApp = () => (
//   <Provider store={store}>
//     <MuiThemeProvider>
//       <AppContainer />
//     </MuiThemeProvider>
//   </Provider>
// )

const MainApp = () => (
    <MuiThemeProvider>
      <App tempData={tempData} />
    </MuiThemeProvider>
)

const mountNode = document.getElementById('root')

ReactDOM.render(<MainApp />,  mountNode);
