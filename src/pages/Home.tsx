import React, { useContext } from 'react';
import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';

const Home: React.FC = () => {
    const { state } = useContext(AuthContext);
    const role = state.user?.role;

    return (
        <Box sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                        Welcome to HelpDesk
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {state.user ? `Hello, ${state.user.name} (${role})` : 'Please login to manage tickets'}
                    </Typography>
                </Box>

                {/* Guest View */}
                {!state.token && (
                    <Box sx={{ textAlign: 'center' }}>
                        <Button variant="contained" size="large" component={Link} to="/login" sx={{ mr: 2 }}>
                            Login
                        </Button>
                        <Button variant="outlined" size="large" component={Link} to="/register">
                            Register
                        </Button>
                    </Box>
                )}

                {/* Customer Dashboard */}
                {role === 'customer' && (
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={5}>
                            <Paper sx={{ p: 4, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#f5f5f5' }, textDecoration: 'none', color: 'inherit' }} component={Link} to="/tickets/new">
                                <AddCircleOutlineIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                                <Typography variant="h5">Open New Ticket</Typography>
                                <Typography>Report an issue or ask for help</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Paper sx={{ p: 4, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#f5f5f5' }, textDecoration: 'none', color: 'inherit' }} component={Link} to="/tickets">
                                <ListAltIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                                <Typography variant="h5">My Tickets</Typography>
                                <Typography>View status of your requests</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                )}

                {/* Agent Dashboard */}
                {role === 'agent' && (
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 4, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#f5f5f5' }, textDecoration: 'none', color: 'inherit' }} component={Link} to="/tickets">
                                <SupportAgentIcon sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
                                <Typography variant="h5">Assigned Tickets</Typography>
                                <Typography>View and manage tickets assigned to you</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                )}

                {/* Admin Dashboard */}
                {role === 'admin' && (
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 4, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#f5f5f5' }, textDecoration: 'none', color: 'inherit' }} component={Link} to="/tickets">
                                <ListAltIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                                <Typography variant="h5">All Tickets</Typography>
                                <Typography>Manage all system tickets</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 4, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#f5f5f5' }, textDecoration: 'none', color: 'inherit' }} component={Link} to="/users">
                                <PeopleIcon sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
                                <Typography variant="h5">Manage Users</Typography>
                                <Typography>Add or edit system users</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </Box>
    );
};

export default Home;