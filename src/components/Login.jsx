import { useState } from "react";
import { httpLogin } from "../service/loginService";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async () => {
        if (!username && !password) {
            setMessage("Please enter username and password");
            return;
        }

        const result = await httpLogin("http://localhost:3000/login", { username: username, password: password });

        if (result.success) {
            setMessage("Login successful! Token saved in localStorage.");
        } else {
            setMessage("Login failed: " + result.error);
        }
    };


    return (
        <div >
            <div>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button onClick={handleLogin} >
                    Login
                </button>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default Login;