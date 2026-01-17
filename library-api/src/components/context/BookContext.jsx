import { createContext, useState } from "react";

const defaultBookContext = {
    books: [
        {
            title: "Unknown Book",
            author: "Unknown Author",
            first_publish_year: "N/A",
            cover_url: null,
            number_of_pages: 0,
        }
    ],
    setBooks: () => { },
    loading: false,
    setLoading: () => { }
};

export const BookContext = createContext(defaultBookContext);

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <BookContext.Provider value={{ books, setBooks, loading, setLoading }}>
            {children}
        </BookContext.Provider>
    );
};
