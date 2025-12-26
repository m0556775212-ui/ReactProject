import type { Ticket } from "../Types";
import Swal from 'sweetalert2';

 export const AddTicketService = async (
    data: Ticket,
    token: string | null,
    navigate: (path: string) => void
 ) => {
        const response = await fetch("http://localhost:4000/tickets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data) ,
    });
    if(response.ok) {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Ticket added successfully',
        });
        navigate("/tickets");
        }
    else{
        if (response.status === 403) {
            Swal.fire({
                icon: 'warning',
                title: 'Access Denied',
                text: 'You do not have permission to perform this action. Only Admins can add tickets.',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to add ticket',
            });
        }
    }
  }