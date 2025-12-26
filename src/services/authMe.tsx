import axios from "axios"

export const authMe = async (token: string | null) => {
    try {
        const response = await axios.get("http://localhost:4000/auth/me",{ 
            headers: {
                 "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.data;
        return await data;
    } 
    catch (error) {
        return null;
    }    
}
