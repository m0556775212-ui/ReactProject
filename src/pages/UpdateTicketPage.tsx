import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateTicketService } from "../services/UpdateTicketService";
import type { updateTicket } from "../Types";
import UpdateTicket from "../components/Tickets/UpdateTicket";

const UpdateTicketPage: React.FC = () => {
    const navigate = useNavigate();
    const state = useContext(AuthContext).state;
    const { ticketId } = useParams<{ ticketId: string }>();
    return (
        <>
            <h1>Update Ticket</h1>
            <UpdateTicket onSubmit={(data: updateTicket) => UpdateTicketService(ticketId, data, state.token, navigate)} />
        </>
    )
}
export default UpdateTicketPage;