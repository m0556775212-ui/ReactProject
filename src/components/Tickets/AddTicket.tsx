import { useForm, type SubmitHandler } from "react-hook-form";
import type { Ticket } from "../../Types";
import { TextField, Button, Box, Typography, Container, Paper } from "@mui/material";

interface Props {
  onSubmit: SubmitHandler<Ticket>;
}

const AddTicket: React.FC<Props> = ({onSubmit}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Ticket>();
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>Add New Ticket</Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="subject"
            label="Subject"
            autoFocus
            error={!!errors.subject}
            helperText={errors.subject ? errors.subject.message : ""}
            {...register("subject", { required: "נושא הטיקט הוא שדה חובה" })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Description"
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description ? errors.description.message : ""}
            {...register("description", { required: "תיאור הטיקט הוא שדה חובה" })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Ticket
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddTicket;
