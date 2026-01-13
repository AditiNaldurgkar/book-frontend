import react from "react";
import "./login.css";
function login(){
    return <div>
        <h1 className="loginhead">Login Page</h1>
        <input className="logininput" type="text" placeholder="Username"/><br/>
        <input className="logininput" type="password" placeholder="Password"/><br/>
        <button className="loginbtn">Login</button>
    </div>
}
export default login;