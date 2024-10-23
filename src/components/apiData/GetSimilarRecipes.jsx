import axios from './axios'
import { useEffect, useState } from 'react';

export default function GetSimilarRecipes(id) {
    const [similar_recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const recipesResponse = await axios.get(`/similar-recipes/?recipe_id=${id}`);
                setRecipes(recipesResponse.data)
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
        
    }, [id]);

    return { similar_recipes,  error };
}