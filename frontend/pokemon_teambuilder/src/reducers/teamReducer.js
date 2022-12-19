const initialState = {
    slots: [34, 12, 90]
}

const teamReducer = (state=initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {...state, slots: state.slots.push(action.payload)} 
        case "REMOVE":
            return {...state, slots: state.slots.splice(state.slots.indexOf(action.payload), 1)} 
        default:
            return state
    }
}

export default teamReducer
