import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import AddComment from "../components/Comments/AddComment";
import { AddCommentService } from "../services/AddCommentService";


const AddCommentPage: React.FC = () => {
    const { ticketId } = useParams<{ ticketId: string }>();
    const {state} = useContext(AuthContext);
    const navigate = useNavigate();
  return (
    <>
    <AddComment onSubmit={(data) => AddCommentService(data, Number(ticketId), state, navigate)}/>
    </>
  );
}

export default AddCommentPage;