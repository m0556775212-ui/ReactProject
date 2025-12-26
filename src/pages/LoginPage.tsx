 import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import React from "react";
import Login from "../components/Login";
import { LoginService } from "../services/LoginService";

const LoginPage : React.FC = () => {
    const navigate = useNavigate();
    const { dispatch } = React.useContext(AuthContext);

    return (
        <div>
            <h1>Login Service</h1>
            <Login onSubmit={(data) => LoginService(data, dispatch, navigate)} />
        </div>
    )
}

export default LoginPage;