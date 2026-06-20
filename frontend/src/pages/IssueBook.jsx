
import axios from "axios";
import "./IssueBook.css";
import {useState } from "react";

function IssueBook() {


            const [studentName, setStudentName] = useState("");
            const [bookTitle, setBookTitle] = useState("");
             const API_URL = import.meta.env.VITE_API_URL;
  

           const issueBook = async (e) => {
                e.preventDefault();

                try {
                    const res = await axios.post(
                    `${API_URL}/api/issues`,
                    {
                        studentName,
                        bookTitle,
                    }
                    );

                    console.log(res.data);
                } catch (error) {
                  
                        console.log("Status:", error.response?.status);
                        console.log("Error Data:", error.response?.data);
                        console.log("Message:", error.message);

                }
};
  return (
             <form onSubmit={issueBook} className="issuecontainer">
                <h2> Issue Book</h2>
                <label> Student</label><br/>
            <input
                type="text"
                placeholder="Student Name"
                value={studentName}
                onChange={(e) =>
                setStudentName(e.target.value)
                }
            /><br/><br/>
            <label> Title</label><br/>
            <input
                type="text"
                placeholder="Book Title"
                value={bookTitle}
                onChange={(e) =>
                setBookTitle(e.target.value)
                }
            /><br/><br/>

            <button
                type="submit"
                className="btn btn-primary"
            >
                Issue Book
            </button>
            </form>
  
  );
}
export default IssueBook;