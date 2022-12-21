import "./login.css";
import { useRef } from "react";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
export default function Login() {
  const email= useRef();
  const password= useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext);
  const handleClick= (e)=>{
    e.preventDefault();
    loginCall({email: email.current.value, password: password.current.value}, dispatch);
  }
  return (
    
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">GetConnect</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight" onSubmit={handleClick}>
          <form className="loginBox">
            <input 
            placeholder="Email" 
            type="email" 
            className="loginInput" 
            ref={email}
            required/>
            <input 
            placeholder="Password" 
            required 
            type= "password" 
            className="loginInput" 
            ref={password}
            />
            <button className="loginButton" type="submit">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
