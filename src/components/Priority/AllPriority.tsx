import type { priority } from "../../Types";
import Priority from "./Priority";
import { Grid, Typography, Box } from "@mui/material";

const AllPriority: React.FC<{priorities: priority[], loading: boolean}> = ({priorities, loading}) => {
    if (loading) {
        return <Typography variant="h6">Loading...</Typography>;
    }
    return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="h4" gutterBottom component="div">
            All Priorities
        </Typography>
        {priorities && priorities.length > 0 ? (
            <Grid container spacing={2}>
                {priorities.map((priority: priority) => (
                    <Grid item xs={12} sm={6} md={4} key={priority.id}>
                        <Priority Priority={priority} />
                    </Grid>
                ))}
            </Grid>
        ) : (
            <Typography variant="body1">No priorities found</Typography>
        )}
    </Box>
    )
}   
export default AllPriority;