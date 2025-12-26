import React from "react";
import Comment from "./Comment";
import type { commentFull } from "../../Types";
import { CircularProgress } from "@mui/material";
const AllComments: React.FC<{ comments: commentFull[], loading: boolean }> = ({ comments, loading }) => {
    if (loading) {
        return <CircularProgress />;
    }
    return (
        <>
            {comments && comments.length > 0 ? (
                comments.map((comment: commentFull) => (
                    <Comment key={comment.id} comment={comment} />  
                ))
            ) : <p>No tickets found</p>}
        </>
    )
}

export default AllComments;
