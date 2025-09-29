import axios from "axios";

export const httpLogin = (url, data) => {
    return axios.post(url, data, { withCredentials: true })
        .then(response => {
            const { token } = response.data;
            if (token) {
                localStorage.setItem("token", token);
                console.log(`token: ${token}`);
            }
            return { success: true, token };
        })
        .catch(error => {
            return { success: false, error: error.response?.data || error.message };
        }
        )
}