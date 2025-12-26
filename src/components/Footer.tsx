import { Box, Typography, Container, Grid, Link as MuiLink, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-evenly">
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            We are dedicated to providing the best support experience for our customers. 
                            Our Help Desk system ensures your issues are resolved efficiently.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box component="nav">
                            <MuiLink component={Link} to="/" variant="body2" color="text.secondary" display="block" sx={{ mb: 0.5 }}>
                                Home
                            </MuiLink>
                            <MuiLink component={Link} to="/about" variant="body2" color="text.secondary" display="block" sx={{ mb: 0.5 }}>
                                About
                            </MuiLink>
                            <MuiLink component={Link} to="/contact" variant="body2" color="text.secondary" display="block" sx={{ mb: 0.5 }}>
                                Contact
                            </MuiLink>
                            <MuiLink component={Link} to="/tickets" variant="body2" color="text.secondary" display="block">
                                Tickets
                            </MuiLink>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton aria-label="Facebook" color="primary">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="Twitter" color="primary">
                                <TwitterIcon />
                            </IconButton>
                            <IconButton aria-label="Instagram" color="secondary">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton aria-label="LinkedIn" color="primary">
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {'© '}
                        {new Date().getFullYear()}
                        {' Help Desk System. All rights reserved.'}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;