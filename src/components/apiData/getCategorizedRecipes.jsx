import { useEffect, useState } from 'react';
import axios from '../apiData/axios';

const UseCategorizedRecipes = (id) => {
    const [categorized_recipes, setRecipes] = useState([]);
    const [categoryInfo, setCategoryInfo] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                // Make the first API call to get categorized recipes
                const recipesResponse = await axios.get(`/recipe/?category_id=${id}`);
                setRecipes(recipesResponse.data);
                const categoryResponse = await axios.get(`/category/${id}`);
                setCategoryInfo(categoryResponse.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [id]);

    return {  categorized_recipes, categoryInfo, error };
};

export default UseCategorizedRecipes;
