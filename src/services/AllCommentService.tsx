import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import type { commentFull } from "../Types";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const AllCommentService = () => {
    const { ticketId } = useParams<{ ticketId: string }>();
    const {state} = useContext(AuthContext);
    const [comments, setComments] = useState<commentFull[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {

    const apifunction = async () => {
    try{
        const response = await axios.get(`http://localhost:4000/tickets/${ticketId}/comments`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${state.token}`
            },
        });
        const data = await response.data;
        setComments(data);
    }
    catch(error: any){
        if (error.response && error.response.status === 403) {
            Swal.fire({
                icon: 'warning',
                title: 'Access Denied',
                text: 'You do not have permission to view comments.',
            });
        } 
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to fetch comments',
            });
        }
    }
        finally {
            setLoading(false);
        }
    }

        if (state.token) {
            apifunction();
        }
        else {
            setLoading(false);
        }

    }, [state.token, ticketId]); 


return { comments, loading};
}

export default AllCommentService;