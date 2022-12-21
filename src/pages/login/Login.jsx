import "./login.css";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
export default function Login() {

  const username = useRef();
  const password = useRef();

  const {dispatch, isFetching}= useContext(Context);


  const handleSubmit= async (e)=>{
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {

      const res= await axios.post("/auth/login", {
        username: username.current.value,
        password: password.current.value,
      });

    dispatch({type: "LOGIN_SUCCESS", payload: res.data});

      
    } catch (error) {
    dispatch({type: "LOGIN_FAILURE"});
      
    }
  };


  console.log(isFetching);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." ref={username}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." ref={password}/>
        <button className="loginButton" disabled={isFetching}>Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  );
}
