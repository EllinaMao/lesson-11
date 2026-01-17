import { useContext } from "react";
import { BookContext } from "../context/BookContext.jsx";
import { ModalWindow } from "./Modal/ModalWindow.jsx";
import { ModalHeader } from "./Modal/ModalHeader.jsx";
import { ModalFooter } from "./Modal/ModalFooter.jsx";
import { Button } from "react-bootstrap";

const BookItem = (...props) => {
    const { books } = useContext(BookContext);
    const bookObj = Object.keys.map(books).filter((keyword) => keyword !== "coverUrl" && keyword !== "title");
    const bookUrl = books.coverUrl ? books.coverUrl : "placeholder";

    return (
        <ModalWindow
            header={Header}
            footer={Footer}
        >
            <div key={key}>
                {Object.keys.map(bookObj, key)}
            </div>

        </ModalWindow>
    )


}

const Header = (booktitle) => {
    return (
        <ModalHeader
            title={booktitle}>
            ...comething
        </ModalHeader>
    )
}

const Footer = () => {

    return (
        <ModalFooter    >
            <Button onClose={handleClose}>
                Close
            </Button>
        </ModalFooter >
    )
}