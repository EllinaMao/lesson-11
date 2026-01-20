import { Container } from "react-bootstrap";
import BooksList from "./BooksList.jsx";
import SearchFields from "./Search/SearchFields.jsx";

const LibraryContainer = () => {
  return (
    <Container
      className="my-5 p-5 bg-white rounded shadow-lg"
      style={{ maxWidth: "900px" }}
    >
      <header className="text-center mb-5">
        <h1 className="fw-bold text-primary display-5 mb-3">
          📚 Library Search
        </h1>
        <p className="text-muted fs-5">
          Find your favorite books using Open Library API
        </p>
      </header>

      <section className="mb-4">
        <SearchFields />
      </section>

      <hr className="my-5 opacity-25" />

      <section>
        <BooksList />
      </section>
    </Container>
  );
};

export default LibraryContainer;
