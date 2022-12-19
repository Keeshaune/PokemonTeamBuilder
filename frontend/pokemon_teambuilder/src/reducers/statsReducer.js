const initialState = {
    stats: {
        hp: 0,
        attack: 0,
        defense: 0,
        "special-attack": 0,
        "special-defense": 0,
        speed: 0
    },
    compStats: {
        hp: 0,
        attack: 0,
        defense: 0,
        "special-attack": 0,
        "special-defense": 0,
        speed: 0
    }
}

const statsReducer = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE":
            return {...state, stats: action.payload} 
        case "UPDATE_COMP":
            return {...state, compStats: state.stats} 
        default:
            return state
    }
}

export default statsReducer
