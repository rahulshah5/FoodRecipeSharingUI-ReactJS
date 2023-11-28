import { useState,useEffect } from "react";
import axios from "./axios";

export default function GetRating(id) {
   
    const [rating, SetRatings] = useState([]);
 
    const [ratingError, setRatingError] = useState("");


    const fetchRating = async () => {
        try { 
            const res = await axios.get(`rating/?recipe=${id}`);
            SetRatings(res.data)
        } catch (apiError) {
            setRatingError(apiError.message)
        }
    }

    useEffect(() => {
        fetchRating()
    }, [])

    return {rating,ratingError}
}