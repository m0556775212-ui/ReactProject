
import React from "react";
import type { UserProps } from "../../Types";
import { Card, CardContent, Typography, Avatar, Box, Chip } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

const User : React.FC<{ user: UserProps }> = ({ user }) => {

    return (
        <Card sx={{ minWidth: 275, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                        <PersonIcon />
                    </Avatar>
                    <Typography variant="h6" component="div">
                        {user.name}
                    </Typography>
                </Box>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {user.email}
                </Typography>
                <Box sx={{ mb: 2 }}>
                    <Chip label={user.role} color={user.role === 'admin' ? 'secondary' : 'default'} size="small" />
                </Box>
                <Typography variant="caption" display="block">
                    ID: {user.id}
                </Typography>
                <Typography variant="caption" display="block">
                    Created: {user.created_at}
                </Typography>
            </CardContent>
        </Card>
    )
}   

export default User;