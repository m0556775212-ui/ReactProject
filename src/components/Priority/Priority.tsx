import type { priority } from "../../Types";
import { Card, CardContent, Typography, Box } from "@mui/material";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const Priority: React.FC<{Priority: priority}> = ({Priority}) => {
    return (
        <Card sx={{ minWidth: 275, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PriorityHighIcon color="error" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="div">
                        {Priority.name}
                    </Typography>
                </Box>
                <Typography variant="caption" display="block" color="text.secondary">
                    ID: {Priority.id}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default Priority;