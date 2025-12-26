import axios from "axios";
import Swal from 'sweetalert2';

export const AddCommentService = async (
    data: { content: string },
    ticketId: number,
    state: { token: string | null },
    navigate: (path: string) => void
) =>{
      
        try{
            await axios.post(`http://localhost:4000/tickets/${ticketId}/comments`, data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${state.token}`
            },
            });
            navigate(`/tickets/${ticketId}`);
            }
            catch(error: any){
                if (error.response && error.response.status === 403) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Access Denied',
                        text: 'You do not have permission to add comments.',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Failed to add comment',
                    });
                }
            }
        }
