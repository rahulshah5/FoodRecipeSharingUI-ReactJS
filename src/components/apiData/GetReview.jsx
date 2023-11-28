import { useState,useEffect } from "react";
import axios from "./axios";

export default function GetReviews(id) {
    const [review, setReviews] = useState([]);
    const [reviewError, setReviewError] = useState("");


    const fetchReview = async () => {
        try { 
            const res = await axios.get(`review/?recipe=${id}`);
            setReviews(res.data)
        } catch (apiError) {
            setReviewError(apiError.message)
        }
    }

    useEffect(() => {
        fetchReview()
    }, [])

    return {review,reviewError}
}