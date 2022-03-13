const BookForm = () => {
    return (
        <div className="card-body d-flex">
            <input type="text" className="form-control" placeholder="add new book" />
            <button className="btn btn-success">Add</button>
        </div>
    );
}
 
export default BookForm;