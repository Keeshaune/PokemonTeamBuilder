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
        case "SET":
            return {...state, id: action.payload}
        case "UPDATE_COMP":
            return {...state, compId: state.id}
        case "SHOW_COMP":
            return {...state, compOn: action.payload}
        case "HIDE_COMP":
            return {...state, compOn: action.payload} 
        default:
            return state
    }
}

export default dexReducer
