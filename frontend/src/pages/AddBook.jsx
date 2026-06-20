import axios from "axios";
import {useState } from "react";
import "./AddBook.css";
function AddBook() {
  const [coverImage, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/books", {
      coverImage,
      title,
      author,
    });

    alert("Book Added");
  };

  return (
    <div className="container">
      <h2>Add Book</h2>

      <form onSubmit={handleSubmit} className="addContainer">
        <label> Image URL</label><br/>
        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        /><br/><br/>
        <label> Title</label><br/>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br/><br/>
      <label> Author</label><br/>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        /><br/><br/>

        <button type="submit"  className="btn btn-primary">Add Book</button>
      </form>
    </div>
  );
}
export default AddBook;