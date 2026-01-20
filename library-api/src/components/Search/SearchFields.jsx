import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import FormInput from "../Search/FormInput";
import { fetchBooks } from "../../api/Api";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

export function SearchFields() {
    const { setBooks, setLoading } = useContext(BookContext);
    const [query, setQuery] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) {
            toast.warning("Please enter a search query");
            return;
        }

        setLoading(true);
        try {
            const response = await fetchBooks(query);
            setBooks(response.docs || []);
        } catch (error) {
            setBooks([]);
            toast.error("Failed to fetch books. Please try again.");
        }
        finally {
            setLoading(false);
        }

    };

    return (
        <form onSubmit={handleSearch} className="mb-4">
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
