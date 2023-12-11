import { useState,useEffect } from "react";
import axios from "./axios";

export default function GetReviews(id) {
    const [review, setReviews] = useState([]);
    const [reviewError, setReviewError] = useState("");
    var country = localStorage.getItem('country')
    country=country.toUpperCase()
    country=country.replace(/['"]+/g, '')
    const fetchReview = async () => {
        try { 
            const res = await axios.get(`review/?recipe=${id}&country=${country}`);
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