export function setListings (listings) {
    return {
        type: 'SET_LISTINGS',
        listings
    }
}

export function goingTo(entry) {
    return {
        type: 'GOING_TO',
        entry
    }
}

export function notGoingTo(entry) {
    return {
        type: 'NOT_GOING_TO',
        entry
    }
}

export function togglePristine() {
    return {
        type: 'TOGGLE_PRISTINE'
    }
}

export function toggleAllowUnauth() {
    return {
        type: 'TOGGLE_ALLOW_UNAUTHORISED'
    }
}