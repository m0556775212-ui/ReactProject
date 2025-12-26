
import type { newPriority } from "../../Types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Container, Paper } from "@mui/material";

interface Props {
    onSubmit: SubmitHandler<newPriority>;
}
const AddPriority: React.FC<Props> = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<newPriority>();
     return (
       <Container maxWidth="sm">
         <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
           <Typography variant="h5" gutterBottom>Add New Priority</Typography>
           <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
             <TextField
               margin="normal"
               required
               fullWidth
               id="name"
               label="Priority Name"
               autoFocus
               error={!!errors.name}
               helperText={errors.name ? errors.name.message : ""}
               {...register("name", { required: "שם הסטטוס הוא שדה חובה" })}
             />
             <Button
               type="submit"
               fullWidth
               variant="contained"
               sx={{ mt: 3, mb: 2 }}
             >
               Add Priority
             </Button>
           </Box>
         </Paper>
       </Container>
     )
};
export default AddPriority;