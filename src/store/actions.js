import axios from 'axios'

import tempData from '../tempdata'

// constant declarations
export const SEARCH_YELP = 'SEARCH_YELP'
export const ADD_CHAR_TO_SEARCH = 'ADD_CHAR_TO_SEARCH'
export const TOGGLE_ALLOW_UNAUTH = 'TOGGLE_ALLOW_UNAUTH'

// action creators

export const addCharToSearch = (str) => {
    return {
        type: 'ADD_CHAR_TO_SEARCH',
        str
    }
}

export const searchYelp = (request) => {
    return {
        type: 'SEARCH_YELP',
        request
    }
}

export const toggleAllowUnauth = () => {
    return {
        type: 'TOGGLE_ALLOW_UNAUTH'
    }
}

export const toggleFetchingAjax = () => {
    return {
        type: 'TOGGLE_FETCHING_AJAX'
    }
}

export const showFetchingAjax = () => {
    return {
        type: 'SHOW_FETCHING_AJAX'
    }
}

export const stopFetchingAjax = () => {
    return {
        type: 'STOP_FETCHING_AJAX'
    }
}

export const setAjaxFail = (status) => {
    return {
        type: 'SET_AJAX_FAIL',
        status
    }
}

export const showListings = (status) => {
    return {
        type: 'SHOW_LISTINGS',
        status
    }
}

export const toggleShowHelp = () => {
    return {
        type: 'TOGGLE_SHOW_HELP'
    }
}

export const onFbLogin = () => {
    return {
        type: 'ON_FB_LOGIN'
    }
}

export const setListings = (listings) => {
    return {
        type: 'SET_LISTINGS',
        listings
    }
}

export const onFetchSuccess = () => {
    return {
        type: 'ON_FETCH_SUCCESS'
    }
}

export const onFetchFail = () => {
    return {
        type: 'ON_FETCH_FAIL'    
    }
}

export const requestListings = () => {
    return {
        type: 'REQUEST_LISTINGS'
    }
}

export const receiveListings = (jsonData) => {
    return {
        type: 'RECEIVE_LISTINGS',
        listings: JSON.parse(jsonData),
        receivedAt: Date.now()
    }
}

export const handleListingClick = listing => {
    return {
        type: 'HANDLE_LISTING_CLICK',
        listing
    }
}

export const setFbDialogToOpen = status => {
    return {
        type: 'SET_FB_DIALOG_TO_OPEN',
        status
    }
}

// thunks

export function fetchListings(searchTerm) {
    return function (dispatch) {
        
        // dispatch(toggleFetchingAjax())
        // window.setTimeout(() => {

        //         dispatch(toggleFetchingAjax())
        //         dispatch(setListings(tempData))
        //         dispatch(showListings(true))

        //     }, 1000
        // )

        dispatch(requestListings(searchTerm))
        return axios.get(`/search/${searchTerm}`)
            .then(res => res.json())
            .then(json => {
                dispatch(toggleFetchingAjax())
                dispatch(receiveListings(json))
            })
            .catch(err => {
                dispatch(toggleFetchingAjax() )
                dispatch(setAjaxFail(true))
                console.log(err)
            })
    }
}

export function goingTo (id) {
    return function(dispatch) {

    }
}

export function notGoingTo(id) {
    return function(dispatch){

    }
}


