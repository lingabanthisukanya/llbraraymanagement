
import { useState, useEffect } from "react";
import axios from "axios";

function Notices() {
  const [message, setMessage] = useState("");
  const [notices, setNotices] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
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

  const addNotice = async () => {
    try {
      await axios.post(
        `${API_URL}/api/notices`,
        { message }
      );

      setMessage("");
      fetchNotices();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteNotice = async (id) => {
    try {
      await axios.delete(
        `${API_URL}/api/notices/${id}`
      );

      fetchNotices();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4" style={{textAlign:"left"}}>Notice Management</h2>

      <div className="card p-3 mb-4">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Notice"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={addNotice}
        >
          Add Notice
        </button>
      </div>

      <div className="card p-3">
        <h4>All Notices</h4>

        {notices.map((notice) => (
          <div
            key={notice._id}
            className="d-flex justify-content-between align-items-center border-bottom py-2"
          >
            <span>{notice.message}</span>

            <button
              className="btn btn-danger btn-sm"
              onClick={() =>
                deleteNotice(notice._id)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notices;