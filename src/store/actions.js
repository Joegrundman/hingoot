export const addCharToSearch = (str) => {
    return {
        type: 'ADD_CHAR_TO_SEARCH',
        str: str
    }
}

export const searchYelp = () => {
    return {
        type: 'SEARCH_YELP'
    }
}

export const toggleAllowUnauth = () => {
    return {
        type: 'TOGGLE_ALLOW_UNAUTH'
    }
}

export const togglePristine = () => {
    return {
        type: 'TOGGLE_PRISTINE'
    }
}

export const toggleShowHelp = () => {
    return {
        type: 'TOGGLE_SHOW_HELP'
    }
}

export const onFbLogin = () => {
    return {

    }
}

export const setListings = (listings) => {
    return {
        type: 'SET_LISTINGS',
        listings
    }
}

