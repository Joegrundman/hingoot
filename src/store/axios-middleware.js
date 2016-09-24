import axios from 'axios'

const getListings = (url) => {
    axios.get(`/search/${url}`)
}

export default store => next => action => {
    if(action.meta && action.meta.remote){
        switch(action.type) {
            case 'SEARCH_YELP': return getListings(action.searchTerm)
        }
    }

    return next(action)
}