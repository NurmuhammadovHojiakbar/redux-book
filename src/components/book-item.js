import { useDispatch } from "react-redux";
import { deleteBookbyId, markBookisDone } from "../redux/actions/book";

const BookItem = ({id,name,isDone}) => {

    const dispatch = useDispatch()

    function markBook(){
        dispatch(markBookisDone(id))
    }

    function deleteBook(){
        dispatch(deleteBookbyId(id))
    }

    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
             <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={isDone? "checked" : ""}
                    id={id} 
                    onChange={markBook}
                />
                <label 
                    className={`form-check-label ${isDone? "text-decoration-line-through" : ""}`} 
                    htmlFor={id}
                >
                    { name }
                </label>
            </div>
            <button className="btn btn-outline-danger btn-sm" onClick={deleteBook}>Remove</button>
        </li>
    );
}
 
export default BookItem;