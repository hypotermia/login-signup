import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { LogOut } from "lucide-react";
import CustomCard from "../../CustomCard";

const Home = () => {
    const navigate = useNavigate();
const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
}
    return (
        <div className="flex flex-col items-center p-6">
            {/* Navbar */}
            <nav className="flex justify-center space-x-6 bg-white shadow-md p-4 w-full">
                <button className="text-lg font-semibold" onClick={() => navigate("/Home")}>Home</button>
                <button className="text-lg font-semibold" onClick={() => navigate("/about")}>About</button>
                <button className="text-lg font-semibold" onClick={() => navigate("/activation")}>Activation</button>
                <button className="text-lg font-semibold flex items-center text-red-500" onClick={handleLogout}>
                    Logout <LogOut className="ml-2" />
                </button>
            </nav>

            <p className="mt-4 text-lg text-gray-600">Selamat datang di Home Page!</p>            
            <div className="mt-6">
                <CustomCard />
            </div>


        </div>
    );
};

export default Home;
