import type { status } from "../../Types";
import { Card, CardContent, Typography, Box } from "@mui/material";
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

const Status: React.FC<{status: status}> = ({status}) => {
    return (
        <Card sx={{ minWidth: 275, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LabelImportantIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="div">
                        {status.name}
                    </Typography>
                </Box>
                <Typography variant="caption" display="block" color="text.secondary">
                    ID: {status.id}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default Status;