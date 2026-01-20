import axios from "axios";
import { toast } from "react-toastify";
import { parceBook } from '../utils/parseBook.jsx';

const BASE_URL = "https://openlibrary.org/search.json";

export const searchBooks = async (query) => {
    try {
        const url = `${BASE_URL}?q=${parceBook(query)}`;
        const response = await axios.get(url);
        return response.data.docs;
    } catch (error) {
        console.error("Error searching books:", error);
        toast.error("Error searching books. Please try again later.");
        throw error;
    }
};