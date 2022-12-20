const initialState = {
    slots: [34, 12, 90]
}

const teamReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SET":
            return {...state, slots: action.payload} 
        default:
            return state
    }
}

export default teamReducer
