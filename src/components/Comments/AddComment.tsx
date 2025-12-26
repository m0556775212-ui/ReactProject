import { useForm, type SubmitHandler } from "react-hook-form";
import type { comment } from "../../Types";
import { TextField, Button, Box } from "@mui/material";

interface Props {
  onSubmit: SubmitHandler<comment>;
}
const AddComment: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<comment>()

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="content"
        label="Add a comment"
        multiline
        rows={2}
        error={!!errors.content}
        helperText={errors.content ? errors.content.message : ""}
        {...register("content", { required: "תוכן התגובה הוא שדה חובה" })}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default AddComment;