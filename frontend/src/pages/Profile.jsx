import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [currency, setCurrency] = useState("CAD ($)");
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/"); // Redirect to Landing Page
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className={`h-screen w-screen flex ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 h-full w-64 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg z-10`}>
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                    <ul>
                        <li className="mb-4"><a href="/" className="text-blue-500 hover:text-blue-600">Home</a></li>
                        <li className="mb-4"><a href="/inventory" className="text-blue-500 hover:text-blue-600">Inventory</a></li>
                        <li className="mb-4"><a href="/sell-donate" className="text-blue-500 hover:text-blue-600">Sell</a></li>
                        <li className="mb-4"><a href="/profile" className="text-blue-500 hover:text-blue-600">Profile</a></li>
                    </ul>

                    <div className="mt-6">
                        <label className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={darkMode}
                                    onChange={() => setDarkMode(!darkMode)}
                                    className="hidden"
                                />
                                <div className="block w-14 h-8 bg-gray-300 rounded-full"></div>
                                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${darkMode ? "translate-x-6" : ""}`}></div>
                            </div>
                            <span className="ml-3">{darkMode ? "Light Mode" : "Dark Mode"}</span>
                        </label>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 pl-64 flex justify-center items-center">
                <div className={`w-full max-w-3xl p-10 rounded-lg shadow-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                    <h2 className="text-3xl font-bold mb-8 text-center">Profile Settings</h2>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-lg font-semibold mb-2">Preferred Currency</label>
                            <select
                                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode
                                    ? "bg-gray-700 border-gray-600"
                                    : "bg-gray-50 border-gray-300"
                                    }`}
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                            >
                                <option>CAD ($)</option>
                                <option>USD ($)</option>
                                <option>EUR (€)</option>
                            </select>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-200">
                                Save Preferences
                            </button>
                            <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-200">
                                Reset All Data
                            </button>
                        </div>

                        {/* Logout Button */}
                        <div className="mt-4">
                            <button
                                onClick={handleLogout}
                                className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-md transition-colors duration-200">
                                Logout
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;