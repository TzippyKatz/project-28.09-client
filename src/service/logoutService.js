import axios from "axios";

export const httpLogout = async (url) => {
    const token = localStorage.getItem("token");
    try {
        await axios.post(url, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        localStorage.removeItem("token");
        console.log("Token removed from localStorage");

        return { success: true };
    } catch (error) {
        return { success: false, error: error.response?.data || error.message };
    }
};