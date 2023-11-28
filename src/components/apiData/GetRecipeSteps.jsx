import { useEffect, useState } from "react";
import axios from "./axios";

export default function GetRecipeSteps(id) {
    
    const [recipeSteps, setRecipeSteps] = useState([])
    const [apiError, setApiError] = useState()
    const data = {
        recipe:recipeSteps
    }
    const fetchRecipeSteps = async () => {
        try { 
            const res = await axios.get(`post-recipe-steps/?recipe=${id}`);
            setRecipeSteps(res.data)
        } catch (apiError) {
            setApiError(apiError.message)
        }
    }

    useEffect(() => {
        fetchRecipeSteps()
    }, [])
    
    return {recipeSteps,apiError}
}