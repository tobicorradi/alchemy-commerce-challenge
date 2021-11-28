const initialState = {
    placedSquares: []
}
const placedSquares = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_SQUARE':
            const addedSquare = [...state.placedSquares, action.payload]
            return{
                ...state,
                placedSquares: addedSquare
            }
        case 'DELETE_ALL':
            return {
                ...state,
                placedSquares: []
            }
        default:
            return state
    }
}

export default placedSquares