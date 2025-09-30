import axios from "axios";

export const httpGet = async (url) => {
    const token = localStorage.getItem("token");
    try {
        const res = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        })
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const httpPost = (url, data) => {
    return axios.post(url, data, { withCredentials: true })
        .then(response => response.data)
        .catch(error => error.response?.data);
}
