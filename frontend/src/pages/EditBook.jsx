
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditBook.css";

function EditBook() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [coverImage, setCoverImage] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
     const API_URL = import.meta.env.VITE_API_URL;
  

    useEffect(() => {
        fetchBook();
    }, []);

    const fetchBook = async () => {
        try {
            const response = await axios.get(
                 `${API_URL}/api/books/${id}`
            );

            setCoverImage(response.data.coverImage);
            setTitle(response.data.title);
            setAuthor(response.data.author);
        } catch (error) {
            alert("Failed to fetch book details");
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                 `${API_URL}/api/books/${id}`,
                {
                    coverImage,
                    title,
                    author,
                }
            );

            alert(response.data.message);

            navigate("/dashboard/books");
        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Failed to update book"
            );
        }
    };

    return (
        <div className="edit-book-container">
            <h2>Edit Book</h2>

            <form
                className="edit-book-form"
                onSubmit={handleUpdate}
            >
                <input
                    type="text"
                    placeholder="Cover Image URL"
                    value={coverImage}
                    onChange={(e) =>
                        setCoverImage(e.target.value)
                    }
                    required
                />

                <input
                    type="text"
                    placeholder="Book Title"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                    required
                />

                <input
                    type="text"
                    placeholder="Author Name"
                    value={author}
                    onChange={(e) =>
                        setAuthor(e.target.value)
                    }
                    required
                />

                <div className="button-group">
                    <button type="submit"
                   >
                        Update Book
                    </button>

                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => navigate("/dashboard/books")}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditBook;