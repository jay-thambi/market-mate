import { useState } from "react";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

const Landing = () => {
    const [currentForm, setCurrentForm] = useState("welcome"); // 'signup', 'login', or 'welcome'

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen w-screen">
            {/* Main Container */}
            <div className="flex items-center justify-between w-full h-full px-12">
                {/* Left Side: Logo */}
                <div className="flex-1 text-center">
                    <h1 className="text-6xl font-bold text-blue-500 font-montserrat">Market Mate</h1>
                </div>

                {/* Right Side: Authentication Box */}
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                    {currentForm === "welcome" && (
                        <>
                            <h1 className="text-2xl font-bold text-center mb-6">Welcome to Our Platform</h1>
                            <p className="text-center mb-6 text-gray-600">Join us to manage your items efficiently!</p>

                            <div className="mb-4">
                                <button
                                    onClick={() => setCurrentForm("signup")}
                                    className="block w-full text-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2"
                                >
                                    Sign Up
                                </button>
                            </div>

                            <div className="mb-4">
                                <button
                                    onClick={() => setCurrentForm("login")}
                                    className="block w-full text-center text-white bg-green-500 hover:bg-green-600 rounded-lg py-2"
                                >
                                    Sign In
                                </button>
                            </div>
                        </>
                    )}

                    {currentForm === "signup" && (
                        <>
                            <SignUp />
                            <button
                                onClick={() => setCurrentForm("welcome")}
                                className="block w-full text-center mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                            >
                                Back to Welcome
                            </button>
                        </>
                    )}

                    {currentForm === "login" && (
                        <>
                            <Login />
                            <button
                                onClick={() => setCurrentForm("welcome")}
                                className="block w-full text-center mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                            >
                                Back to Welcome
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Landing;