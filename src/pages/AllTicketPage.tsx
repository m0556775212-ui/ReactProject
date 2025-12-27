import React, { useContext, useEffect } from "react";
import AllTickets from "../components/Tickets/AllTickets";
import { TicketContext } from "../context/TicketContext";
import { CircularProgress, Box } from "@mui/material";

const AllTicketPage = () => {
    const { state, fetchTickets } = useContext(TicketContext);
    const { tickets, loading } = state;

    useEffect(() => {
        fetchTickets();
    }, [fetchTickets]);

    if (loading && tickets.length === 0) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <div>
            <h1>All Tickets</h1>
            <AllTickets tickets={tickets}  />
        </div>
    )
}

export default AllTicketPage;