const initialState = {
    placedSquares: [],
    sidebarSquares: [
        {id: 1, color: 'orange'},
        {id: 2, color: 'green'},
        {id: 3, color: 'royalblue'},
        {id: 4, color: 'darkmagenta'},
        {id: 5, color: 'sienna'},
    ]
}
const squaresReducer = (state = initialState, action) => {
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

export default squaresReducer