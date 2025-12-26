import Status from "./Status";
import type { status } from "../../Types";
import { Grid, Typography, Box } from "@mui/material";

const AllStatus: React.FC<{statuses: status[], loading: boolean}> = ({statuses, loading}) => {
    if (loading) {
        return <Typography variant="h6">Loading...</Typography>;
    }
    return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="h4" gutterBottom component="div">
            All Statuses
        </Typography>
        {statuses && statuses.length > 0 ? (
            <Grid container spacing={2}>
                {statuses.map((status: status) => (
                    <Grid item xs={12} sm={6} md={4} key={status.id}>
                        <Status status={status} />
                    </Grid>
                ))}
            </Grid>
        ) : (
            <Typography variant="body1">No statuses found</Typography>
        )}
    </Box>
    )
}   
export default AllStatus;