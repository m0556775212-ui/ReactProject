import axios from "axios"
import Swal from 'sweetalert2';

export const DeleteTicketService = async (ticketId: number, token: string | null) => {
    try{
    await axios.delete(`http://localhost:4000/tickets/${ticketId}`,
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    Swal.fire({
        title: 'Success!',
        text: 'Ticket deleted successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
    });
}
    catch(error: any){
        if (error.response && error.response.status === 403) {
            Swal.fire({
                icon: 'warning',
                title: 'Access Denied',
                text: 'You do not have permission to delete this ticket.',
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to delete ticket',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    }
}