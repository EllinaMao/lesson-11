
import { useContext } from "react";
import { BookContext } from "./context/BookContext";
import { Spinner, Alert } from "react-bootstrap";


const BookList = () => {
    const { books, loading } = useContext(BookContext);
    if (loading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div >
        );
    }
    if (!books || books.length === 0) {
        return <Alert variant="info" className="mt-4">No results found. Try searching for a book!</Alert>;
    }
    return (
        <div className="d-flex flex-wrap gap-4 justify-content-center mt-4">
            {books.map((book, index) => (
                <BookItem key={book.key || index} book={book} />
            ))}
        </div>
    );
};

export default BookList;
