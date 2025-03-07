import React,{useState} from "react";
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () =>{
    const [action,setAction] = useState("Login");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit=()=>{
        console.log("Name:",name);
        console.log("Email:",email);
        console.log("Password:",password);
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"? <div></div> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="name"value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                </div>}

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="email" value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
            <div className="submit-container">
                <div className={action === "Login"?"submit gray":"submit"}
                onClick={()=>{
                    handleSubmit("Sign Up");
                    setAction("Sign Up")

                }}>Sign Up</div>
                <div className={action === "Sign Up"?"submit gray": "submit"}
                onClick={()=>{
                    handleSubmit("Login");
                    setAction("Login")}}>Login</div>
            </div>

        </div>
    )
}
export default LoginSignup;