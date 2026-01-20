import axios from "axios";
export const BASE_URL = "https://openlibrary.org/search.json";
//q+harry+potter

export const fetchBooks = async (query, url = BASE_URL) => {

    try {
        const response = await axios.get(`${url}`, {
            params: { q: query }
        });
        return response;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
};


