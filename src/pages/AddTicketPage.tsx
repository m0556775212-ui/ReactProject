import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import AddTicket from "../components/Tickets/AddTicket";
import { AddTicketService } from "../services/AddTicketService";

const AddTicketPage: React.FC = () => {
    const {token} = useContext(AuthContext).state;
    const navigate = useNavigate();
    return(
        <>
            <h1>Add Ticket </h1>
            <AddTicket onSubmit={(data) => AddTicketService(data, token, navigate)} />
        </>
   )
};

export default AddTicketPage;