import { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import AllStatus from "../components/Status/AllStatus";
import { AuthContext } from "../context/authContext";
import { AllStatusService } from "../services/AllStatusService";
import type { status } from "../Types";

const AllStatusPage: React.FC = () => {
    const state = useContext(AuthContext).state;
    const [statuses, setStatuses] = useState<status[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect( () => {
        const fetchStatuses = async () => {
        try{
        const response = await AllStatusService(state.token);
        setStatuses(response);
        }
        catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to fetch statuses',
            });
        }
        finally {
            setLoading(false);
        }
    };
    if (state.token) {
        fetchStatuses();
    }
    else {
        setLoading(false);
    }
    }, [state.token]);
    
    return (
        <>
        <AllStatus statuses={statuses} loading={loading} />
        </>
    )
}
export default AllStatusPage;