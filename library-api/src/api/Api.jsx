import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "/openlibrary/search.json";

export const searchBooks = async (query) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: query
            }
        });
        return response.data.docs;
    } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data from the server.");
        throw error;
    }
};