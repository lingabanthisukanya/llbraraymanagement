import { FaBookOpen } from "react-icons/fa";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: "white",
        color: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <FaBookOpen size={40} />
        <h2 style={{ margin: "0",fontSize:"40px" }}>Libraro</h2>
      </div>

      <h3 style={{ margin: 0 }}>
        Welcome, {user?.fullName}
      </h3>
    </div>
  );
}

export default Header;