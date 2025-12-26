import { useForm, type SubmitHandler } from "react-hook-form";
import type { newUser } from "../../Types";
import { TextField, Button, Box, Typography, Container, Paper, MenuItem } from "@mui/material";

const AddUser: React.FC<{onSubmit: SubmitHandler<newUser>}> = ({onSubmit}) => {
 
  const { register, handleSubmit, formState: { errors } } = useForm<newUser>()
 
      return (
        <Container maxWidth="sm">
          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <Typography variant="h5" gutterBottom>Add New User</Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
                {...register("name", { required: "Name is required", pattern: { value: /^[A-Za-z\s]+$/, message: "Invalid name format" } })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" } })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                {...register("password", { required: "Password is required" })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                select
                label="Role"
                defaultValue="customer"
                inputProps={register("role", { required: "Role is required" })}
                error={!!errors.role}
                helperText={errors.role ? errors.role.message : ""}
              >
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="agent">Agent</MenuItem>
              </TextField>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add User
              </Button>
            </Box>
          </Paper>
        </Container>
      );
    
  };


export default AddUser;
