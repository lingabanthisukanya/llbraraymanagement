import axios from "axios";
import { useState, useEffect } from "react";
import "./BookList.css";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/books"
    );

    setBooks(res.data);
  };

  return (
    <div className="listcontainer">
      <h2>Book List</h2>

      <div className="books-grid">
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <img
              src={book.coverImage}
              alt={book.title}
              className="book-image"
            />

            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;