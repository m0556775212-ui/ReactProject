import AllCommentService from "../services/AllCommentService";
import React from "react";
import AllComments from "../components/Comments/AllComments";
const AllCommentPage: React.FC = () => {  
const  {comments, loading} = AllCommentService();
    return (
        <div>
            <h1>All Comments Page</h1>
            <AllComments comments={comments} loading={loading} />
        </div>
    )
}

export default AllCommentPage;