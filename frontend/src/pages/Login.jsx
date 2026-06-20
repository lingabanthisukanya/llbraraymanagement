import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import bgImage from '../assets/lib6.png';

import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;
function Login()

{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleLogin= async(e)=>
    {
        e.preventDefault();
        const loginData={
            email:email,
            password:password
        };
        try{
            const response=await axios.post(
                `${API_URL}/api/login`,loginData
            );
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("user",JSON.stringify(response.data.user));
            alert(response.data.message)
            navigate("/dashboard");


        }
        catch(error)
        {
                    alert(
                error.response?.data?.message ||
                error.message
            );
        }
    }


    return(
        <div className="login" style={{backgroundImage:`url('${bgImage}')`}}>
            <form onSubmit={handleLogin} className="login-form">
                    <h2> Login Form</h2>
                <label style={{textAlign:"left"}}><strong>Email</strong> </label>
                <input type="email" placeholder="Enter your email" className="loginInput"
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <label style={{textAlign:"left"}}><strong>Password</strong> </label>
                <input type="password" placeholder="Enter your password" className="loginInput"
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br/><br/>
                <button type="Submit"  className="loginBtn"> Login</button><br/>

            
          
             <p>   Don't Have an account? {" "}</p><br/>
                <Link to="/register" style={{color:"blue"}}>
                Register Here
                </Link>
            
            </form>
        </div>
    )
}
export default Login;