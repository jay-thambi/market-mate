import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

const Logout = () => {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Logged out successfully! 🔒");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="p-2 bg-red-500 text-white rounded"
        >
            Logout
        </button>
    );
};

export default Logout;