import { useEffect } from "react";
import type { UserProps } from "../Types";
import React from "react";
import Swal from 'sweetalert2';

export const AllUserService = () => {
    const [Users, setUsers] = React.useState<UserProps[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    useEffect(() => {
    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:4000/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setUsers(data);
            } else {
                if (response.status === 403) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Access Denied',
                        text: 'You do not have permission to view users.',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Failed to fetch users',
                    });
                }
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Network error while fetching users',
            });
        } finally {
            setLoading(false);
        }
    };
    fetchUsers();
}, []);
return { Users, loading };
}   

