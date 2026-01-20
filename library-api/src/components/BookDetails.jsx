import { ModalWindow } from "./Modal/ModalWindow.jsx";
import { ModalHeader } from "./Modal/ModalHeader.jsx";
import { ModalFooter } from "./Modal/ModalFooter.jsx";
import { Button } from "react-bootstrap";


const BookDetails = ({ show, handleClose, title, coverUrl, author, year, isbn, language }) => {
    return (
        
        <ModalWindow show={show} onHide={handleClose}>
        <ModalHeader closeButton onHide={handleClose}>
          <h3>{title}</h3>
        </ModalHeader>

        <div className="d-flex gap-3">
          <img src={coverUrl} alt={title} style={{ maxWidth: "120px" }} />
          <div>
            <p>
              <strong>Author:</strong> {author}
            </p>
            <p>
              <strong>Year:</strong> {year}
            </p>
            <p>
              <strong>ISBN:</strong> {isbn ? isbn[0] : "N/A"}
            </p>
            <p>
              <strong>Language:</strong>{" "}
              {language ? language.join(", ") : "N/A"}
            </p>
          </div>
        </div>

        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalWindow>
    );
};
export default BookDetails;