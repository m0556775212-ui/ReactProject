import axios from "axios"

export const AllStatusService = async (token: string | null) => {
    const apifunction = async (token: string | null) => {
    const statuses = await axios.get("http://localhost:4000/statuses", 
        { 
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
    } });
    return statuses.data;
}
    return apifunction(token);
}