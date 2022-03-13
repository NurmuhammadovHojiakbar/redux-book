import bookActions from "../../constants/book"

export const markBookisDone = (id)=>{
    return {
        type: bookActions.ISDONE,
        payload: {
            id: id
        }
    }
}