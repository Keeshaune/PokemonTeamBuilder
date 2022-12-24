const initialState = {
    slots: []
}

const teamReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SET_TEAM":
            return {slots: action.payload}
        default:
            return state
    }
}

export default teamReducer
