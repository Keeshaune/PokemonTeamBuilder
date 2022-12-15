const initialState = {
    id: 1,
    compId: 0
}

const dexReducer = (state=initialState, action) => {
    switch (action.type) {
        case "INCREASE":
            return {...state, id: state.id + action.payload}
        case "DECREASE":
            return {...state, id: state.id - action.payload}
        case "COMPARE":
            return {...state, compId: state.id}
        case "HIDECOMP":
            return {...state, compId: 0} 
        default:
            return state
    }
}

export default dexReducer
