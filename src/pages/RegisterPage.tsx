import React from "react";
import Register from "../components/Register";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import  RegisterService  from "../services/RegisterService";
import type { SubmitHandler } from "react-hook-form";
import type { IFormInputRegister } from "../Types";
const RegisterPage: React.FC = () => {
  const navigate = useNavigate(); 
  const { dispatch } = React.useContext(AuthContext);
const handleRegistration: SubmitHandler<IFormInputRegister> = async (data) => {
    await RegisterService(data, dispatch, navigate);
  };
  return (
    <>
        <h1>Register </h1>
        <Register onSubmit={handleRegistration}/>
    </>
  )
};

export default RegisterPage;
