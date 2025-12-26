import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { commentFull } from "../../Types";

const Comment: React.FC<{comment: commentFull}> = ({ comment }) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${comment.id}-content`}
                id={`panel${comment.id}-header`}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                        {comment.author_name ? comment.author_name.charAt(0).toUpperCase() : 'U'}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {comment.author_name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {new Date(comment.created_at).toLocaleString()}
                        </Typography>
                    </Box>
                     <Typography variant="body2" color="text.secondary" sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}>
                        {comment.author_email}
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">
                    {comment.content}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default Comment;

 
