import axios from "axios";

// const baseURL = "http://localhost:4000/"
const baseURL = "https://music-app-aryamangithubs-projects.vercel.app/"

export const validateUser = async(token) => {
    try{
        const res = await axios.get(`${baseURL}api/users/login`, {
            headers: { 
                Authorization: "Bearer " + token
            }
        })

        return res.data
    } catch(error){

    }
}