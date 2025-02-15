import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
    const [totalValue, setTotalValue] = useState(0);
    const [categories, setCategories] = useState({});
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        fetchTotalValue();
    }, []);

    const fetchTotalValue = async () => {
        try {
            const response = await fetch("http://localhost:5001/get-inventory");
            const items = await response.json();

            const total = items.reduce((sum, item) => sum + parseFloat(item.estimatedPrice), 0);
            setTotalValue(total.toFixed(2));

            updateCategoryBreakdown(items);
        } catch (error) {
            console.error("Error fetching inventory:", error);
        }
    };

    const updateCategoryBreakdown = (items) => {
        const categoryData = {};
        items.forEach(item => {
            if (!categoryData[item.category]) {
                categoryData[item.category] = 0;
            }
            categoryData[item.category] += parseFloat(item.estimatedPrice);
        });
        setCategories(categoryData);
    };

    return (
        <div className={`h-screen w-screen flex ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
            {/* Sidebar */}
            <aside className={`w-64 h-full p-6 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} shadow-lg`}>
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <ul>
                    <li className="mb-4"><Link to="/" className={`sidebar-link ${darkMode ? "text-gray-300" : "text-gray-800"}`}>Home</Link></li>
                    <li className="mb-4"><Link to="/inventory" className={`sidebar-link ${darkMode ? "text-gray-300" : "text-gray-800"}`}>Inventory</Link></li>
                    <li className="mb-4"><Link to="/sell-donate" className={`sidebar-link ${darkMode ? "text-gray-300" : "text-gray-800"}`}>Sell</Link></li>
                    <li className="mb-4"><Link to="/profile" className={`sidebar-link ${darkMode ? "text-gray-300" : "text-gray-800"}`}>Profile</Link></li>
                </ul>

                {/* Dark Mode Toggle */}
                <div className="flex items-center mt-6">
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={() => setDarkMode(!darkMode)}
                                className="hidden"
                            />
                            <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
                            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${darkMode ? "translate-x-6" : ""}`}></div>
                        </div>
                        <span className="ml-3">{darkMode ? "Light Mode" : "Dark Mode"}</span>
                    </label>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow h-full p-6">
                <h1 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>Total Estimated Resale Value</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Total Value Box */}
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
                        <h2 className="text-5xl font-bold">${totalValue} CAD</h2>
                        <p className="text-lg">Total Value of Logged Items</p>
                    </div>

                    {/* Categories */}
                    <div className={`shadow-lg rounded-lg p-6 ${darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"}`}>
                        <h2 className="text-lg font-semibold">Categories</h2>
                        <ul className="mt-2">
                            {Object.keys(categories).length > 0 ? (
                                Object.entries(categories).map(([category, value]) => (
                                    <li key={category} className="flex justify-between">
                                        <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                        <span>${value.toFixed(2)}</span>
                                    </li>
                                ))
                            ) : (
                                <li className="text-gray-500">No items yet.</li>
                            )}
                        </ul>
                    </div>

                    {/* Trends */}
                    <div className={`shadow-lg rounded-lg p-6 ${darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"}`}>
                        <h2 className="text-lg font-semibold">Trends</h2>
                        <p className="mt-2">View your item trends over time.</p>
                    </div>
                </div>

                <Link to="/add-item" className="mt-6 inline-block bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 hover:shadow-xl hover:scale-105">
                    Add New Item
                </Link>
            </main>
        </div>
    );
};

export default Index;