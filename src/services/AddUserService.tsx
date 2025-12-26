import type { newUser } from "../Types";
import Swal from 'sweetalert2';

 export const AddUserService = async (
    data: newUser,
    token: string | null,
    navigate: (path: string) => void
 ) => {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User added successfully',
        });
        navigate("/users");
      }
      else{
        if (response.status === 403) {
            Swal.fire({
                icon: 'warning',
                title: 'Access Denied',
                text: 'You do not have permission to add users. Only Admins can perform this action.',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to add user',
            });
        }
      }
    }