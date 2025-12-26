import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const About: React.FC = () => {
    return (
        <Container maxWidth="lg">
            {/* Hero Section */}
            <Box sx={{ py: 8, textAlign: 'center' }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    About Us
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
                    We are dedicated to revolutionizing customer support with our intuitive and powerful Help Desk solution.
                </Typography>
            </Box>

            {/* Mission Section */}
            <Box sx={{ mb: 8 }}>
                <Paper elevation={0} sx={{ p: 4, bgcolor: 'grey.50', borderRadius: 4 }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Our Mission
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                                Our mission is to empower businesses to build stronger relationships with their customers through efficient, transparent, and reliable support systems.
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                                We believe that great support is the backbone of every successful company. That's why we've built a platform that makes ticket management effortless, allowing your team to focus on what really matters - helping people.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="Team working together"
                                sx={{
                                    width: '100%',
                                    maxWidth: 500,
                                    borderRadius: 4,
                                    boxShadow: 3
                                }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Box>

            {/* Values Section */}
            <Box sx={{ mb: 8 }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }}>
                    Our Core Values
                </Typography>
                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                        <Paper elevation={2} sx={{ p: 4, textAlign: 'center', height: '100%', width: '100%', borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Avatar sx={{ bgcolor: 'primary.light', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                                <GroupsIcon fontSize="large" />
                            </Avatar>
                            <Typography variant="h6" gutterBottom>Customer First</Typography>
                            <Typography variant="body2" color="text.secondary">
                                We prioritize the needs of our users and their customers in every decision we make.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                        <Paper elevation={2} sx={{ p: 4, textAlign: 'center', height: '100%', width: '100%', borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Avatar sx={{ bgcolor: 'secondary.light', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                                <HandshakeIcon fontSize="large" />
                            </Avatar>
                            <Typography variant="h6" gutterBottom>Integrity</Typography>
                            <Typography variant="body2" color="text.secondary">
                                We believe in honest, transparent communication and building trust with our community.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                        <Paper elevation={2} sx={{ p: 4, textAlign: 'center', height: '100%', width: '100%', borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Avatar sx={{ bgcolor: 'success.light', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                                <EmojiObjectsIcon fontSize="large" />
                            </Avatar>
                            <Typography variant="h6" gutterBottom>Innovation</Typography>
                            <Typography variant="body2" color="text.secondary">
                                We are constantly evolving and improving our platform to meet the changing needs of the industry.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default About;
