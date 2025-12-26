import axios from "axios";
import type { IFormInputLogin, IFormInputRegister } from "../Types";
import { LoginService } from "./LoginService";
import Swal from 'sweetalert2';

 export const RegisterService = async (
    data: IFormInputRegister,
    dispatch: React.Dispatch<any>,
    navigate: (path: string) => void,
 ) => {
    try{  
      await axios.post("http://localhost:4000/auth/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user: IFormInputLogin = {
        email: data.email,
        password: data.password
    }
    await LoginService(user, dispatch, navigate);
    
    }
    catch(error: any){
        if (error.response && error.response.status === 409) {
             Swal.fire({
                icon: 'warning',
                title: 'Registration Failed',
                text: 'User already exists.',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Registration failed. Please try again.',
            });
        }
    }
  };

  export default RegisterService;