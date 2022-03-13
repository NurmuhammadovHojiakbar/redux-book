import bookActions from "../../constants/book";

const initialState = [
    {
        id: 1,
        name: "Dor ostidagi odam",
        isDone: true
    },
    {
        id: 2,
        name: "Alvido vatan",
        isDone: false
    },
]

const bookReducer = (state = initialState,action) =>{
    switch(action.type){
        case bookActions.ADD_BOOK:
            return [
                ...state,
                action.payload
            ]
        case bookActions.ISDONE:
            return state.map(item =>{
                if(item.id === action.payload.id){
                    return {
                        ...item,
                        isDone: !item.isDone
                    }
                }else{
                    return item
                }
            });
        case bookActions.REMOVE_BOOK:
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state;
    }
};

export default bookReducer;