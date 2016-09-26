import axios from 'axios'

const isDev = process.env.NODE_ENV === "development"
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

export const setVotesOnListing = (listingId, votes) => {
    return {
        type: 'SET_VOTES_ON_LISTING',
        listingId,
        votes
    }
}

export const setIsGoingOnListing = (listingId, status) => {
    return {
        type: 'SET_IS_GOING_ON_LISTING',
        listingId,
        status
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



export const setFbDialogToOpen = status => {
    return {
        type: 'SET_FB_DIALOG_TO_OPEN',
        status
    }
}

// thunks

export function fetchListings(searchTerm) {
    return function (dispatch) {

        if (isDev) {
            dispatch(toggleFetchingAjax())
            window.setTimeout(() => {

                dispatch(toggleFetchingAjax())
                dispatch(setListings(tempData))
                dispatch(showListings(true))

            }, 1000
            )
        } else {
            dispatch(requestListings(searchTerm))
            axios.get(`/search/${searchTerm}`)
                .then(res => res.json())
                .then(json => {
                    dispatch(toggleFetchingAjax())
                    dispatch(receiveListings(json))
                })
                .catch(err => {
                    dispatch(toggleFetchingAjax())
                    dispatch(setAjaxFail(true))
                    console.log(err)
                })
        }
    }
}

export function handleListingClick (id, oldVotes, isGoing) {
    return function(dispatch){
        if(!isGoing) {
            dispatch(goingTo(id, oldVotes))
        } else {
            dispatch(notGoingTo(id, oldVotes))
        }
    }

}

export function goingTo(id, oldVotes) {
    if(isDev){
        return function(dispatch){
            let nextVotes
            console.log("++++++++++++++++++++++")
            console.log('oldVotes', oldVotes)
            if(oldVotes === undefined) {
                nextVotes = 1
            } else {
                nextVotes = oldVotes + 1
            }
            console.log('nextVotes', nextVotes)
            window.setTimeout(() => {
                dispatch(setVotesOnListing(id, nextVotes))
            }, 500)
            
        }
    } else {
    const tz = -(new Date().getTimezoneOffset() / 60)
    return function (dispatch) {
        axios.get(`/going/${id}.${tz}`)
            .then(data => {
                const votes = JSON.parse(data.data.votes)
                dispatch(setAjaxFail(false))
                dispatch(setVotesOnListing(id, votes))
                dispatch(setIsGoingOnListing(id, true))
            })
            .catch(err => {
                console.log(err)
                dispatch(setAjaxFail(true))
            })
        }

    }
}

export function notGoingTo(id) {
    return function (dispatch) {
        axios.get(`/notGoing/${id}`)
            .then(data => {
                const votes = JSON.parse(data.data.votes)
                dispatch(setAjaxFail(false))
                dispatch(setVotesOnListing(id, votes))
                dispatch(setIsGoingOnListing(id, false))
            })
            .catch(err => {
                console.log(err)
                dispatch(setAjaxFail(true))
            })
    }
}


