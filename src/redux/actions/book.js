import bookActions from "../../constants/book"

export const addBook = (name) =>{
    return {
        type: bookActions.ADD_BOOK,
        payload: {
            id: Math.random(),
            name: name,
            isDone: false
        }
    }
}

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

export const saveBooks = (state) => {
    return {
        type: bookActions.SAVE_BOOKS,
        payload: {
            state
        }
    }
}

export const deleteBook = (state) =>{
    return {
        type: bookActions.DELETE_ALL,
        payload: {
            state
        }
    }
}