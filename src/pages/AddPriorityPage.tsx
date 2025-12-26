import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import AddPriority from "../components/Priority/AddPriority";
import { AddPriorityService } from "../services/AddPriorityService";

const AddPriorityPage: React.FC = () => {
    const navigate = useNavigate();
    const state = useContext(AuthContext).state;        
    return (
        <>
            <h1>Add Priority </h1>
            <AddPriority onSubmit={(data) => AddPriorityService(data, state.token, navigate)} />
        </>
    )
};
export default AddPriorityPage;