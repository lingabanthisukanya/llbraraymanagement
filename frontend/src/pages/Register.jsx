import { useState } from "react";
import axios from "axios";
import "./Register.css";
import bgimage from "../assets/lib.png";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const API_URL = import.meta.env.VITE_API_URL;

  const handleRegister = async (e) => {
    e.preventDefault();
    if(password!==confirmPassword)
    {
      alert("Passwords dont match");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/api/register`,
        {
          fullName,
          email,
          password,
        }
      );

      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="registerPage">
      
      <div className="leftSection">
        <img src={bgimage} alt="Library" />
      </div>

      <div className="rightSection">
        <form onSubmit={handleRegister} className="registerForm">
          <h1>Registration Form</h1>

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <label> ConfirmPassword</label>
          <input
            type="password"
            placeholder="Enter confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />


          <button type="submit">Register</button>
        </form>
      </div>

    </div>
  );
}

export default Register;