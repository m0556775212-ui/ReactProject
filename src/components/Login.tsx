import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import type { IFormInputLogin } from "../Types";
import { TextField, Button, Typography, Container, Box, Paper } from "@mui/material";

interface Props {
  onSubmit: SubmitHandler<IFormInputLogin>;
}

const Login: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputLogin>();
 
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
            {...register("email", { 
              required: "אימייל הוא שדה חובה", 
              pattern: {
                value: /^\s*[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\s*$/,
                message: "כתובת אימייל לא תקינה "
              }
            })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
            {...register("password", {
              required: "סיסמה היא שדה חובה",
              pattern: {
                value: /^.{3,}$/, 
                message: "הסיסמה חייבת להיות באורך של לפחות 3 תווים "
              }
            })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            התחברות
          </Button>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2">
              New User?
            </Typography>
            <Button component={Link} to="/register" variant="text">
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
