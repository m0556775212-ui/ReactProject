import React, { useContext } from "react";
import { useEffect } from "react";
import type { TicketProps } from "../Types";
import Swal from 'sweetalert2';
import { AuthContext } from "../context/authContext";

const AllTicketService = () => {
    const state = useContext(AuthContext).state;
    const [tickets, setTickets] = React.useState<TicketProps[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    useEffect(() => {
    const fetchTickets = async () => {
        try{
        const response = await fetch("http://localhost:4000/tickets", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${state.token}`
            }
        });
        if(response.ok){
        const data = await response.json();
        setTickets(data);
        } else {
            if (response.status === 403) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Access Denied',
                    text: 'You do not have permission to view tickets.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to fetch tickets',
                });
            }
        }
    }
    catch(error){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to fetch tickets',
    });
 } finally {
    setLoading(false);
 }
    };
    fetchTickets();
}, [state.token]);

let filteredTickets = tickets;
if(state.user?.role == 'agent')
    filteredTickets = tickets.filter(ticket => ticket.assigned_to === state.user?.id);
else if(state.user?.role == 'customer') 
    filteredTickets = tickets.filter(ticket => ticket.created_by === state.user?.id);

return { tickets: filteredTickets, loading };
}

export default AllTicketService;