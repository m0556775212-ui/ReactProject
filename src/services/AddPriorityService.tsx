import axios from "axios";
import type { newPriority } from "../Types";
import Swal from 'sweetalert2';

export const AddPriorityService = (
    priority: newPriority,
    token: string | null,
    navigate: (path: string) => void
) => {
    const apifunction = async (priority: newPriority, token: string | null) =>{
        try{
            await axios.post(`http://localhost:4000/priorities`, priority, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }); 
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Priority added successfully',
            });
            navigate("/priorities");

        }
        catch (error: any) {
            if (error.response && error.response.status === 403) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Access Denied',
                    text: 'You do not have permission to add priority.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error adding priority',
                });
            }
        }
    };
        apifunction(priority, token);
    }
