import { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import AllPriority from "../components/Priority/AllPriority";
import { AuthContext } from "../context/authContext";
import { AllPriorityService } from "../services/AllPriorityService";
import type { priority } from "../Types";

const AllPriorityPage: React.FC = () => {
    const state = useContext(AuthContext).state;
    const [priorityes, setPriorityes] = useState<priority[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect( () => {
        
        const fetchPriorityes = async () => {
        try{
        const response = await AllPriorityService(state.token);
        setPriorityes(response);
        }
        catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to fetch priorities',
            });
        }
        finally {
            setLoading(false);
        }
        }
    if (state.token) {
        fetchPriorityes();
    }
    else {
        setLoading(false);
    }
    }, [state.token]);
    
    return (
        <>
        <AllPriority priorities={priorityes} loading={loading} />
        </>
    )
}
export default AllPriorityPage;