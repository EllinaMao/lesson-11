import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import BookDetails from "./BookDetails.jsx";

const BookItem = ({ book }) => {
  if (!book) return null;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    title,
    first_publish_year: firstPublishYear,
    cover_i: coverId,
    key,
  } = book;

  const authorsList = book.author_name || [];
  const displayedAuthors = authorsList.slice(0, 2).join(", ");
  const remainingCount = authorsList.length - 2;

  const authorDisplay =
    remainingCount > 0
      ? `${displayedAuthors} (+ ${remainingCount} others)`
      : authorsList.join(", ") || "Unknown Author";

  const fullAuthorList = authorsList.join(", ") || "Unknown Author";

  const year = book.first_publish_year || "N/A";

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://placehold.co/150?text=No+Cover";

  return (
    <>
      <Card style={{ width: "18rem" }} className="h-100 shadow-sm">
        <Card.Img
          variant="top"
          src={coverUrl}
          style={{ height: "250px", objectFit: "cover" }}
        />

        <Card.Body className="d-flex flex-column overflow-hidden">
          <Card.Title className="text-truncate" title={title}>
            {title}
          </Card.Title>
          <div
            className="flex-grow-1 overflow-auto mb-3"
            style={{ height: "100px" }}
          >
            <Card.Text>
              <strong>Author:</strong> {authorDisplay} <br />
              <strong>Year:</strong> {firstPublishYear}
            </Card.Text>
          </div>

          <Button variant="primary" className="mt-auto" onClick={handleShow}>
            Details
          </Button>
        </Card.Body>
      </Card>

      <BookDetails
        show={show}
        handleClose={handleClose}
        title={title}
        coverUrl={coverUrl}
        author={fullAuthorList}
        year={year}
        isbn={book.isbn}
        language={book.language}
      />
    </>
  );
};

export default BookItem;
