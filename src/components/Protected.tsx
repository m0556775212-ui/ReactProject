import React from "react";
import { AuthContext } from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";
import Swal from 'sweetalert2';

interface ProtectedProps {
    allowedRoles?: string[];
}

const Protected: React.FC<ProtectedProps> = ({ allowedRoles }) => {
    const { state } = React.useContext(AuthContext);

    if (!state.token) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && state.user && !allowedRoles.includes(state.user.role)) {
        // חסימת גישה אם התפקיד לא מתאים
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default Protected;