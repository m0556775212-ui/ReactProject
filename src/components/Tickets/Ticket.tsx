
import React, { useContext } from "react";
import type { TicketProps } from "../../Types";          
import { Link } from "react-router-dom";
import { DeleteTicketService } from "../../services/DeleteTicketService";
import { AuthContext } from "../../context/authContext";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

const Ticket : React.FC<{ ticket: TicketProps }> = ({ ticket }) => {
const {state} = useContext(AuthContext);

    return (
        <Card sx={{ minWidth: 275, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Ticket
                </Typography>
                <Typography variant="h5" component="div">
                    {ticket.subject}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Status: {ticket.status_name} | Priority: {ticket.priority_name}
                </Typography>
                {state.user?.role === 'admin' && (
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Assigned to: {ticket.assigned_to || "Unassigned"}
                </Typography>
                )}
                <Typography variant="body2">
                    {ticket.description}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    Created: {ticket.created_at}
                </Typography>
                <Typography variant="caption" display="block">
                    Updated: {ticket.updated_at}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={Link} to={"/tickets/" + ticket.id + "/add-comment"}>Add Comment</Button>
                <Button size="small" component={Link} to={"/tickets/" + ticket.id}>View Comments</Button>
                {(state.user?.role === 'admin' || state.user?.role === 'agent') && (
                <Button size="small" component={Link} to={"/tickets/" + ticket.id + "/edit"}>Update</Button>
                )}
                {state.user?.role === 'admin' && (
                <Button size="small" color="error" onClick={() => DeleteTicketService(ticket.id, state.token)}>Delete</Button>
                )}
            </CardActions>
        </Card>
    )
}   

export default Ticket;