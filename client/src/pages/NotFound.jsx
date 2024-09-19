import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'; // Додайте іконку для головної сторінки, якщо потрібно

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/events'); // Або інший маршрут для головної сторінки
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
            <div className="max-w-md mx-auto">
                <h2 className="text-5xl font-bold text-red-500 mb-4">404</h2>
                <h3 className="text-2xl font-semibold mb-4">Page Not Found</h3>
                <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
                <div
                className='flex justify-center'>
                <button 
                    onClick={handleGoHome}
                    className="flex items-center gap-2 px-4 py-2 bg-link text-white text-lg rounded-lg hover:bg-orange-500 transition duration-500 hover:translate-y-[-2px]">
                    <AiOutlineHome />
                    Go to Home
                </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;