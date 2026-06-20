


import "bootstrap/dist/css/bootstrap.min.css";
import "./LibraryDashboard.css";
import axios from "axios";
import {useState,useEffect} from "react";
function DashBoard() {





    const [bookCount, setBookCount] = useState(0);
    const [issuedBooks, setIssuedBooks] = useState([]);
    const [issuedCount, setIssuedCount] = useState(0);
    const [notices, setNotices] = useState([]);


    const API_URL = import.meta.env.VITE_API_URL;
  
    useEffect(() => {
      fetchBookCount();
        fetchIssuedBooks();
        fetchIssuedCount();
         fetchNotices();
    }, []);
    const fetchNotices = async () => {
  try {
    const res = await axios.get(
      `${API_URL}/api/notices`
    );
    setNotices(res.data);
  } catch (err) {
    console.log(err);
  }
};
  
    const fetchBookCount = async () => {
      try {
        const response = await axios.get(
        `${API_URL}/api/book-count`
        );
  
        setBookCount(response.data.totalBooks);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchIssuedBooks = async () => {
        try {
          const res = await axios.get(
          `${API_URL}/api/issues`
          );

          setIssuedBooks(res.data);
        } catch (err) {
          console.log(err);
        }
    };

const fetchIssuedCount = async () => {
        try {
          const res = await axios.get(
            `${API_URL}/api/issues-count`
          );

          setIssuedCount(res.data.totalIssued);
        } catch (err) {
          console.log(err);
        }
};


  
  return (
    <div className="container-fluid">
    <div>
     
        

        <div className="col-md-10 main">

        

         
          <div className="row g-4 mb-4">

            <div className="col-md-4">
              <div className="card-box">
                <h4>Total Books</h4>
                <div className="stat-number">{bookCount}</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-box">
                <h4>Books Issued</h4>
                <div className="stat-number">{issuedCount}</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-box">
                <h4>Available Books</h4>
                <div className="stat-number">{bookCount-issuedCount}</div>
              </div>
            </div>

          </div>

         
          <div className="row">

            <div className="col-md-8">
              <div className="card-box">

                <h2 className="fw-bold mb-3">
                  Recently Issued Books
                </h2>

                <table className="table table-hover">
                  <tbody>
                    <tbody>
                      <tr>
                          <th>Name</th>
                          <th> Title</th>
                          <th>Date</th>
                      </tr>
                          {issuedBooks.map((issue) => (
                            <tr key={issue._id}>
                              
                              <td>{issue.studentName}</td>
                              <td>{issue.bookTitle}</td>
                              <td>
                                {new Date(
                                  issue.issueDate
                                ).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                    </tbody>
                   
                   
                 </tbody>
                </table>

              </div>
            </div>

                <div className="col-md-4">
                          <div className="card-box">
                            <h2 className="fw-bold mb-3">Library Notices</h2>

                            {notices.length > 0 ? (
                              notices.map((notice) => (
                                <div key={notice._id} className="mb-3">
                                  <p>{notice.message}</p>
                                  <small>
                                    {new Date(notice.createdAt).toLocaleDateString()}
                                  </small>
                                  <hr />
                                </div>
                              ))
                            ) : (
                              <p>No notices available</p>
                            )}
                          </div>
                  </div>

          </div>

        </div>

      </div>
    </div>
  );
}
export default DashBoard;


