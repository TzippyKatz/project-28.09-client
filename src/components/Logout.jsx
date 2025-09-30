import { httpLogout } from '../service/logoutService';

const Logout = () => {
    const handleLogout = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("No user is currently logged in.");
            return;
        }

        const result = await httpLogout("http://localhost:3000/logout");

        if (result.success) {
            alert("Logged out successfully!");
        } else {
            alert("Logout failed: " + result.error);
        }
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;