import bookActions from "../../constants/book"

export const markBookisDone = (id) =>{
    return {
        type: bookActions.ISDONE,
        payload: {
            id: id
        }
    }
}

export const deleteBookbyId = (id) =>{
    return{
        type: bookActions.REMOVE_BOOK,
        payload: {
            id: id
        }
    }
}