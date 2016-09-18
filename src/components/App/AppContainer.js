import React from 'react'
import {connect} from 'react-redux'
import App from './App'

const showPlaces = (listings, pristine) => {
  if (!pristine) {
    return listings
  }
  return
}

const mapStateToProps = state => {
  return {
    places: showPlaces(state.get('listings', state.get('pristine')))
  }
}

const mapDispatchToProps = state => {
    return {
        toggleAllowUnauth: () => {
            dispatch({type: 'TOGGLE_ALLOW_UNAUTHORISED'})
        },
        removeListings: () => {
            dispatch({type: 'TOGGLE_PRISTINE'})
        }
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer