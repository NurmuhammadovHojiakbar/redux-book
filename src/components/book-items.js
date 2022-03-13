import { useSelector } from "react-redux";
import BookItem from "./book-item";

const BookItems = () => {

    const { bookReducer } = useSelector(state => state)
    console.log(bookReducer)

    return (
        <ul className="list-group list-group-flush">
            {
                bookReducer.length > 0 ? 
                    bookReducer.map(b=>(
                     <BookItem 
                        key={b.id}
                        id={b.id}
                        name={b.name}
                        isDone={b.isDone}
                     />
                    )) :
                    <li className="list-group-item text-center" >Kitob mavjud emas:(</li>
            }
        </ul>
    );
}
 
export default BookItems;