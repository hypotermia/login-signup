import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Home from "./Components/Home/Home";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index path="/" element={<LoginSignup />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
