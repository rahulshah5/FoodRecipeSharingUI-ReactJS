import { useState, useEffect } from "react";
import axios from "./axios";
export const userToken=localStorage.getItem("user")

export default function UserData() {
    const [userData, setUserData] = useState([])
    const [favourites,setFavouriteData]=useState([])
    const [apiError, setApiError] = useState(false);
    
    
    
    
    console.log(axios.defaults.headers.common)
    const fetchUserData = async () => {
        try {
            const res = await axios.get("profile/", {
                headers: {
                    Authorization: `Bearer ${userToken.replace(/"/g,"")}`, 
                    }
                });
            setUserData(res.data);
            console.log(res.data+"user response data")
        
        } catch (error) {
            
         setApiError(!apiError);
        }
    };

        const fetchFavouriteData = async () => {
        try {
            const res = await axios.get("favourite/", {
                headers: {
                    Authorization: `Bearer ${userToken.replace(/"/g,"")}`, 
                    }
                });
            setFavouriteData(res.data);
            console.log(res.data+"user response data")
        
        } catch (error) {
         setApiError(!apiError);
        }
    };

    useEffect(() => {
        fetchUserData();
        fetchFavouriteData();
    }, []);
    
    return { userData, favourites,apiError };
} 