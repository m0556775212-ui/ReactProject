import { useForm, type SubmitHandler } from "react-hook-form";
import type { updateTicket } from "../../Types";
import { Button, Box, Typography, Container, Paper, TextField, MenuItem } from "@mui/material";
import { AllUserService } from "../../services/AllUserService";
import { AllStatusService } from "../../services/AllStatusService";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { AllPriorityService } from "../../services/AllPriorityService";
import type { status, priority } from "../../Types";
interface Props {
  onSubmit: SubmitHandler<updateTicket>;
}

const UpdateTicket: React.FC<Props> = ({onSubmit}) => {
    const state = useContext(AuthContext).state;
    const { register, handleSubmit} = useForm<updateTicket>();
    const { Users } = AllUserService();
    const agents = Users.filter(user => user.role === 'agent');
    const [statuses, setStatuses] = useState<status[]>([]);
    const [priorities, setPriorities] = useState<priority[]>([]);
    useEffect(() => {
        const fetchStatuses = async () => { 
            const response = await AllStatusService(state.token);
            setStatuses(response);
        };
        const fetchPriorities = async () => { 
            const response = await AllPriorityService(state.token);
            setPriorities(response);
        };    
        fetchStatuses();
        fetchPriorities();
    }, [state.token]);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>Update Ticket</Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            select
            margin="normal"
            required
            fullWidth
            id="assigned_to"
            label="Assign to Agent"
            defaultValue=""
            inputProps={register("assigned_to", { valueAsNumber: true , required: "Agent is required"})}
          >
            {agents.map((agent) => (
              <MenuItem key={agent.id} value={agent.id}>
                {agent.name} (ID: {agent.id})
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            margin="normal"
            required
            fullWidth
            id="status_id"
            label="Status"
            defaultValue=""
            inputProps={register("status_id", { valueAsNumber: true , required: "Status is required"})}
          >
            {statuses.map((status) => (
              <MenuItem key={status.id} value={status.id}>
                {status.name} (ID: {status.id})
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            margin="normal"
            required
            fullWidth
            id="priority_id"
            label="Priority"
            defaultValue=""
            inputProps={register("priority_id", { valueAsNumber: true , required: "Priority is required"})}
          >
            {priorities.map((priority) => (
              <MenuItem key={priority.id} value={priority.id}>
                {priority.name} (ID: {priority.id})
              </MenuItem>
            ))}
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
export default UpdateTicket;