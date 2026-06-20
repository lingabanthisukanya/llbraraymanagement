import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import axios from "axios";
import "./Books.css";

function Books() {
    const [books, setBooks] = useState([]);
const API_URL = import.meta.env.VITE_API_URL;
    const fetchBooks = async () => {
        try {
            const response = await axios.get(
                `${API_URL}/api/books`
            );
            setBooks(response.data);
        } catch (error) {
            alert("Failed to fetch books");
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

   const navigate = useNavigate();

const handleEdit = (book) => {
    navigate(`/dashboard/edit-book/${book._id}`);
};

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this book?")) {
            return;
        }

        try {
            const response = await axios.delete(
                `${API_URL}/api/books/${id}`
            );

            alert(response.data.message);
            fetchBooks();
        } catch (error) {
            alert("Failed to delete book");
        }
    };

    return (
        <div className="books-container">
            <h2>Books Collection</h2>

            {books.length === 0 ? (
                <p>No books found.</p>
            ) : (
                <table className="books-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {books.map((book) => (
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>

                                <td>
                                    <button
                                        className="edit-btn"
                                        onClick={() => handleEdit(book)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() =>
                                            handleDelete(book._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Books;