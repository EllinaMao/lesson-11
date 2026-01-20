import { useState } from "react";
import { ModalWindow } from "./Modal/ModalWindow.jsx";
import { ModalHeader } from "./Modal/ModalHeader.jsx";
import { ModalFooter } from "./Modal/ModalFooter.jsx";
import { Button, Card } from "react-bootstrap";

const BookItem = ({ book }) => {
    const [showModal, setShow] = useState(false);

    const { title, first_publish_year: firstPublishYear, cover_i: coverId, key } = book;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const coverUrl = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
        : "https://placehold.co/150?text=No+Cover";

    const author = book.author_name ? book.author_name.join(', ') : "Unknown Author";

    return (
        <>
            <Card className="h-100 shadow-sm" style={{ width: '200px', minHeight: '350px', maxHeight: '450px' }}>
                <Card.Img variant="top" src={coverUrl} alt={title} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>by {author}</Card.Text>
                    <Card.Text>First Published: {firstPublishYear || "N/A"}</Card.Text>
                    <Button variant="primary" className="mt-auto" onClick={handleShow}>View Details</Button>
                </Card.Body>
            </Card >
            {showModal && (
                <ModalWindow onClose={handleClose}>
                    <ModalHeader closeButton>
                        <h5>{title}</h5>
                    </ModalHeader>
                    <div className="p-3">
                        <div className="text-center mb-3">
                            <img src={coverUrl} alt={title} style={{ maxWidth: '150px' }} />
                        </div>
                        <p><strong>Author:</strong> {author}</p>
                        <p><strong>First Publish Year:</strong> {firstPublishYear}</p>
                        <p><strong>ISBN:</strong> {book.isbn ? book.isbn[0] : "N/A"}</p>
                        <p><strong>Language:</strong> {book.language ? book.language.join(', ') : "N/A"}</p>
                        {book.number_of_pages_median && (
                            <p><strong>Pages:</strong> {book.number_of_pages_median}</p>
                        )}
                    </div>
                    <ModalFooter>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </ModalFooter>
                </ModalWindow>
            )
            }

        </>
    )


}

export default BookItem;