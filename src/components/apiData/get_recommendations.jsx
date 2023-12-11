import { useState,useEffect } from "react";
import axios from "./axios";

function Get_Recommendations() {
    const userToken = localStorage.getItem("user")
    const [recommendations, setRecommendations] = useState([])
    const [recommendation_error, setError] = useState("")
    const fetchRecommendations = async () => {
        try {
            const response = await axios.get('recommendation/', {
                headers: {
                    Authorization: `Bearer ${userToken.replace(/"/g, "")}`,
                }
            });
            setRecommendations(response.data)

        } catch (error) {
            setError(error)
        }
    };
    useEffect(() => {
        fetchRecommendations();
        
    }, []);

    return {recommendations,recommendation_error}

}
export default Get_Recommendations;