import "./register.css"
import { useState } from "react"
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Register() {
   const [username, setUsername]= useState("");
   const [email, setEmail]= useState("");
   const [password, setPassword]= useState("");

   const history= useHistory();

   const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
      const res= await axios.post("/auth/register", {
        username, email, password
      });
      res.data && history.push("/login");
    } catch (error) {
      console.log(error);
      
    }
   
   }
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." onChange={e=>setUsername(e.target.value)}/>
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." onChange={e=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." onChange={e=>setPassword(e.target.value)}/>
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">Login</button>
    </div>
    )
}
