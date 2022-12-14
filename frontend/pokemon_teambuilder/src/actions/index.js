///////////////////
// DEX REDUCER
///////////////////
export const increase_id = () => {
    return {
        type: "INCREASE",
        payload: 1
    }
}

export const decrease_id = () => {
    return {
        type: "DECREASE",
        payload: 1
    }
}

export const set_id = (id) => {
    return {
        type: "SET_ID",
        payload: id
    }
}

export const changeCompId = () => {
    return {
        type: "UPDATE_COMP"
    }
}

export const showCompare = () => {
    return {
        type: "SHOW_COMP",
        payload: true
    }
}

export const hideCompare = () => {
    return {
        type: "HIDE_COMP",
        payload: false
    }
}

///////////////////
// Stats REDUCER
///////////////////

export const updateStats = (stats) => {
    return {
        type: "UPDATE",
        payload: stats
    }
}

export const updateCompStats = (stats) => {
    return {
        type: "UPDATE_COMP",
        payload: stats
    }
}

///////////////////
// TEAM REDUCER
///////////////////

export const setTeam = (team) => {
    return {
        type: "SET_TEAM",
        payload: team
    }
}

export const removeTeam = (id) => {
    return {
        type: "REMOVE",
        payload: id
    }
}
