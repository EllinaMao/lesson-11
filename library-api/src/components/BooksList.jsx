
import { useContext } from "react";
import { BookContext } from "./context/BookContext";
import { Spinner } from "react-bootstrap";


const BookList = () => {
    const { books, loading } = useContext(BookContext);
    if (loading) {
        return <Spinner animation="border" />;
    }
    if (books.length === 0) {
        return <p>No books found. Please try a different search.</p>;
    }
    return (
        <div className="d-flex flex-wrap gap-3">
            {books.map((book) => (
                <div key={book.key}>
                    <BookItem book={book} />
                </div>

            ))}
        </div>
    );
};

export default BookList;
