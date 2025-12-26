import axios from "axios"
import type { updateTicket } from "../Types";
import Swal from 'sweetalert2';

export const UpdateTicketService = (
    ticketId: string | undefined,
    UpdateTicket: updateTicket,
    token: string | null,
    navigate: (path: string) => void
) =>{

    const apifunction = async (
        UpdateTicket: updateTicket,
        token: string | null,
        ticketId: string | undefined
    ) =>{
        try{
            await axios.patch(`http://localhost:4000/tickets/${ticketId}`, UpdateTicket, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        });
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Ticket updated successfully',
        });
        navigate("/tickets"); 
    } 
    catch (error: any) {
        if (error.response && error.response.status === 403) {
            Swal.fire({
                icon: 'warning',
                title: 'Access Denied',
                text: 'You do not have permission to update this ticket.',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error updating ticket',
            });
        }
    }
    };
    apifunction(UpdateTicket, token, ticketId);
}
