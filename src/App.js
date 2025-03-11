import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Activation from "./Components/Activation/Activaiton";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index path="/" element={<LoginSignup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/activation" element={<Activation />} />
            </Routes>
        </Router>
    );
};

export default App;
