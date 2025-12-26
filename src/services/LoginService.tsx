import type { IFormInputLogin } from "../Types";
import { authMe } from "./authMe";
import Swal from 'sweetalert2';

export const LoginService = async (
    data: IFormInputLogin,
    dispatch: React.Dispatch<any>,
    navigate: (path: string) => void
 ) => {
    try {
        const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data) ,
        });
        if(response.ok) {
        const responseData = await response.json();
        const token = responseData.token;
        localStorage.setItem("token", token);
        const user = await authMe(token);
        
        dispatch({ type: 'LOGIN', payload: { token: token, role: user.role, user: user} });
        navigate("/");
        } else {
            if (response.status === 401 || response.status === 403) {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid email or password.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Login failed. Please try again later.',
                });
            }
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Network error. Please try again later.',
        });
    }
  };
