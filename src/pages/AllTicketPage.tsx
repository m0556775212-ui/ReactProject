import AllTickets from "../components/Tickets/AllTickets";
import AllTicketService from "../services/AllTicketService";
import { CircularProgress, Box } from "@mui/material";

const AllTicketPage = () => {
    const { tickets, loading } = AllTicketService();

    if (loading) {
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