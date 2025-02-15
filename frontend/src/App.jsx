import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center gap-4 p-6">
        <h1 className="text-3xl font-bold">Market Mate 🚀</h1>
        <nav className="flex gap-4">
          <Link to="/signup" className="text-blue-500">Sign Up</Link>
          <Link to="/login" className="text-green-500">Login</Link>
          <Logout />
        </nav>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;