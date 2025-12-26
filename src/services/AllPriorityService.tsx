import axios from "axios"

export const AllPriorityService = async (token: string | null) => {
    const priorityes = await axios.get("http://localhost:4000/priorities", 
        { 
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
    } });
    return priorityes.data;
}