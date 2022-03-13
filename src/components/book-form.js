import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/actions/book";

const BookForm = () => {

    const [newBook,setNewBook] = useState("")
    const dispatch = useDispatch()

    function addBookHandler(){
        dispatch(addBook(newBook))
        setNewBook("")
    }

    return (
        <div className="card-body d-flex">
            <input 
                type="text" 
                className="form-control" 
                placeholder="add new book" 
                value={newBook}
                onChange={(e)=>setNewBook(e.target.value)}
            />
            <button className="btn btn-success" onClick={addBookHandler}>Add</button>
        </div>
    );
}
 
export default BookForm;