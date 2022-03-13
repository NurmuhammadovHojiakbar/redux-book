import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../redux/actions/book";

const BookFooter = () => {

    const { bookReducer } = useSelector(state => state)
    const dispatch = useDispatch()

    function saveToLocal(){
        localStorage.setItem("books", JSON.stringify(bookReducer))
    }

    function deleteFromLocal(){
        localStorage.removeItem("books")
        dispatch(deleteBook([]))
    }

    return (
        <div className="card-footer d-flex justify-content-end">
            <button className="btn btn-primary  me-2" onClick={saveToLocal}>Save changes</button>
            <button className="btn btn-danger" onClick={deleteFromLocal}>Delete all</button>
        </div>
    );
}
 
export default BookFooter;