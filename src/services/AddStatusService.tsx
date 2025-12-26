import axios from "axios";
import type { newStatus } from "../Types";
import Swal from 'sweetalert2';

export const AddStatusService = (
    status: newStatus,
    token: string | null,
    navigate: (path: string) => void
) => {
    const apifunction = async (status: newStatus, token: string | null) =>{
        try{
            await axios.post(`http://localhost:4000/statuses`, status, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }); 
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Status added successfully',
            });
            navigate("/statuses");

        }
        catch (error: any) {
            if (error.response && error.response.status === 403) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Access Denied',
                    text: 'You do not have permission to add status.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error adding status',
                });
            }
        }
    };
        apifunction(status, token);
    }
