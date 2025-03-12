import React from "react";
import { Book } from "lucide-react"; // Ikon Buku dari Lucide

const CustomCard = () => {
    return (
        <div className="flex items-center bg-white shadow-lg rounded-2xl p-4 w-96 border border-gray-200">
            {/* Icon */}
            <div className="flex items-center justify-center bg-blue-100 p-4 rounded-lg">
                <Book className="text-blue-500 w-10 h-10" />
            </div>

            {/* Text */}
            <div className="ml-4 text-lg font-semibold text-blue-900">
                Judul Buku
            </div>
        </div>
    );
};

export default CustomCard;
