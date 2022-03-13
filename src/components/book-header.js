const BookHeader = ({length}) => {
    return (
        <div className="card-header">
            <h3 className="color-primary">Kitoblar ro'yxati: {length}</h3>
        </div>
    );
}
 
export default BookHeader;