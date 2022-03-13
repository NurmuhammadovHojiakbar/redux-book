import { useSelector } from "react-redux";
import BookFooter from "./components/book-footer";
import BookForm from "./components/book-form";
import BookHeader from "./components/book-header";
import BookItems from "./components/book-items";

function App() {

  const { bookReducer } = useSelector(state => state)

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <BookHeader length={bookReducer.length} />
            <BookForm />
            <BookItems />
            <BookFooter />
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
