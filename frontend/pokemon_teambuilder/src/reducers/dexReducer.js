const initialState = {
    id: 1,
    compId: 1,
    compOn: false
}

const dexReducer = (state=initialState, action) => {
    switch (action.type) {
        case "INCREASE":
            return {...state, id: state.id + action.payload}
        case "DECREASE":
            return {...state, id: state.id - action.payload}
        case "COMPARE":
            return {...state, compOn: action.payload}
        case "HIDE_COMP":
            return {...state, compOn: action.payload} 
        default:
            return state
    }
}

export default dexReducer