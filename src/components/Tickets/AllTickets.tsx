import type { TicketProps } from "../../Types";
import Ticket from "./Ticket";
import { Grid, Typography, Box } from "@mui/material";

interface AllTicketsProps {
    tickets: TicketProps[];
}

const AllTickets: React.FC<AllTicketsProps> = ({ tickets }) => {

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            {tickets && tickets.length > 0 ? (
                <Grid container spacing={2}>
                    {tickets.map((ticket: TicketProps) => (
                        <Grid item xs={12} sm={6} md={4} key={ticket.id}>
                            <Ticket ticket={ticket} />
                        </Grid>
                    ))}
                </Grid>
            ) : <Typography variant="body1">No tickets found</Typography>}
        </Box>
    )
}  
export default AllTickets;