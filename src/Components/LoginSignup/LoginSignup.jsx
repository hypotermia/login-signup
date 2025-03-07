import React,{useState} from "react";
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () =>{
    const [action,setAction] = useState("Login");
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [username,setEmail] = useState("");
    const [passwords,setPassword] = useState("");
    const [error,setError] = useState("");

    const handleSubmit=async(actionType)=>{
        
        setError("");
        const apiUrl =actionType === "Login"?"https://localhost:44383/api/User/Login":
        "https://localhost:44383/api/User/AddUser";
        const body = actionType === "Login" ? {username,passwords}: {username,passwords,firstname,lastname};

        try {
            const response =await fetch(apiUrl,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                
                body : JSON.stringify(body)
                
            });
            console.log(body);
            const data = await response.json();
            if(!response.ok){
                throw new Error(data.message || "Gagal melakukan " + actionType);
            }
            console.log("Response dari server : ",data);
            if(actionType==="Login" && data.token){
                localStorage.setItem("jwtToken",data.token);
                console.log("Login telah success! Token disimpan");
            }
            setLastname("");
            setFirstname("");
            setEmail("");
            setPassword("");
        }
        catch (error){
            setError(error.message);
            console.error("Error : ", error);
        }

    }

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            {error && <div className="error-message">{error}</div>} 
            <div className="inputs">
                {action==="Login"? <div></div> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Firstname"value={firstname}
                    onChange={(e)=>setFirstname(e.target.value)}/>
                </div>}
                {action==="Login"? <div></div> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Lastname"value={lastname}
                    onChange={(e)=>setLastname(e.target.value)}/>
                </div>}
                
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Username" value={username}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password"
                    value={passwords}
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