import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import AddUser from "../components/Users/AddUser";
import { AddUserService } from "../services/AddUserService";

const AddUserPage: React.FC = () => {
    const { token } = useContext(AuthContext).state;
    const navigate = useNavigate();
    return(
        <>
            <h1>Add User </h1>
            <AddUser onSubmit={(data) => AddUserService(data, token, navigate)} />
        </>
    )
};

export default AddUserPage