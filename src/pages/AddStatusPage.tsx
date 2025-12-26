import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import AddStatus from "../components/Status/AddStatus";
import { AddStatusService } from "../services/AddStatusService";

const AddStatusPage: React.FC = () => {
    const navigate = useNavigate();
    const state = useContext(AuthContext).state;        
    return (
        <>
            <h1>Add Status </h1>
            <AddStatus onSubmit={(data) => AddStatusService(data, state.token, navigate)} />
        </>
    )
};
export default AddStatusPage;