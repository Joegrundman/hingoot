import axios from 'axios'

export const axiosGoingTo = (url, success, error) => {
    axios.get(`/going/${url}`)
    .then(data => success(data))
    .catch(err => error(err))
}

export const axiosNotGoingTo = (url, success, error) => {
    axios.get(`/notGoingTo/${url}`)
    .then(data => success(data))
    .catch(err => error(err))
}

export const axiosSearch = (url, success, error) => {
    axios.get(`/search/${url}`)
    .then(data => success(data))
    .catch(err => error(err))
}