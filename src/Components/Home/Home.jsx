import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <ul>
                    <li><button onClick={() => navigate("/Home")}>Home</button></li>
                    <li><button onClick={() => navigate("/about")}>About</button></li>
                    <li><button onClick={() => navigate("/activation")}>Activation</button></li>
                    <li><button onClick={() => navigate("/")}>Logout</button></li>
                </ul>
            </nav>
            <p>Selamat datang di Home Page!</p>
        </div>
    );
};

export default Home;
