import User from "./User";
import type { UserProps } from "../../Types";           
import { AllUserService } from "../../services/AllUserService";
import { Grid, Typography, Box, CircularProgress } from "@mui/material";

const AllUsers: React.FC = () => {
    
const { Users: users, loading } = AllUserService();

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            {users && users.length > 0 ? (
                <Grid container spacing={2}>
                    {users.map((user: UserProps) => (
                        <Grid item xs={12} sm={6} md={4} key={user.id}>
                            <User user={user} />  
                        </Grid>
                    ))}
                </Grid>
            ) : <Typography variant="body1">No users found</Typography>}
        </Box>
    )
}  
export default AllUsers;


