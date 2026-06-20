import "./Profile.css";
import axios from "axios";
import { FaUserShield, FaBook, FaUsers, FaClipboardList } from "react-icons/fa";
import {useState,useEffect} from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
    const [stats, setStats] = useState({
    totalBooks: 0,
    issuedBooks: 0,
  });
   const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchStats();
  }, []);
  const fetchStats = async () => {
  try {
    const [bookRes, issueRes] = await Promise.all([
      axios.get(`${API_URL}/api/book-count`),
      axios.get(`${API_URL}/api/issues-count`),
    ]);

    setStats({
      totalBooks: bookRes.data.totalBooks,
      issuedBooks: issueRes.data.totalIssued,
    });
  } catch (error) {
    console.log(error);
  }
};






  return (
    <div className="profile-container">
      <div className="profile-card">

      
        <div className="profile-header">
          <div className="profile-avatar">
            {user?.fullName?.charAt(0).toUpperCase()}
          </div>

          <div className="profile-info">
            <h2>{user?.fullName}</h2>
            <p>{user?.email}</p>

            <div className="admin-badge">
              <FaUserShield />
              <span>Library Administrator</span>
            </div>
          </div>
        </div>

      
        <div className="stats-grid">

          <div className="stat-card">
            <FaBook className="icon" />
            <h3>{stats.totalBooks}</h3>
            <p>Total Books</p>
          </div>

          

          <div className="stat-card">
            <FaClipboardList className="icon" />
            <h3>{stats.issuedBooks}</h3>
            <p>Issued Books</p>
          </div>

        </div>

      
        <div className="details-section">
          <div className="detail">
            <span>Role</span>
            <strong> Administrator</strong>
          </div>

          <div className="detail">
            <span>Status</span>
            <strong className="active">Active</strong>
          </div>

        </div>

        <div className="action-buttons">
          <button className="edit-btn">
            Edit Profile
          </button>

        
        </div>

      </div>
    </div>
  );
}

export default Profile;