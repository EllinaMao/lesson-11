import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import FormInput from "../Search/FormInput";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { searchBooks } from "../../api/Api";



export default function SearchFields() {
    const { setBooks, setLoading } = useContext(BookContext);
    const [query, setQuery] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) {
            toast.warning("Please enter a search query");
            return;
        }

        if(query.length < 3) {
            toast.warning("Search query must be at least 3 characters long");
            return;
        }

        setLoading(true);
        setBooks([]);

        try {
            const response = await searchBooks(query);
            if (!response || response.length === 0) {
                toast.info("No results found.");
            }
            setBooks(response || []);
        } catch (error) {
            setBooks([]);
            toast.error("Failed to fetch books. Please try again.");
        }
        finally {
            setLoading(false);
        }

    };

    return (
        <form onSubmit={handleSearch} className="">
            <FormInput
                label="Search Books:"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter book title, author, or subject"
            />
            <Button type="submit" variant="primary">Search</Button>
        </form>
    );
}
