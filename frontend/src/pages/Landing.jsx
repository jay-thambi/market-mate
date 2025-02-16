import { Link } from "react-router-dom";

const Landing = () => {
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
                    <h1 className="text-2xl font-bold text-center mb-6">Welcome to Our Platform</h1>
                    <p className="text-center mb-6 text-gray-600">Join us to manage your items efficiently!</p>

                    <div className="mb-4">
                        <Link to="/signup" className="block text-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2">
                            Sign Up
                        </Link>
                    </div>

                    <div className="mb-4">
                        <Link to="/login" className="block text-center text-white bg-green-500 hover:bg-green-600 rounded-lg py-2">
                            Sign In
                        </Link>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-gray-600">
                            Already have an account?
                            <Link to="/login" className="text-blue-500 hover:underline ml-1">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;