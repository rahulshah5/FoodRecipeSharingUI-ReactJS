import { useEffect, useState } from 'react';
import axios from '../apiData/axios';

const useCategorizedRecipes = (id) => {
    const [recipes, setRecipes] = useState([]);
    const [categoryInfo, setCategoryInfo] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make the first API call to get categorized recipes
                const recipesResponse = await axios.get(`/recipe/?category_id=${id}`);
                setRecipes(recipesResponse.data);

                // Make the second API call to get category information
                const categoryResponse = await axios.get(`/category/${id}`);
                setCategoryInfo(categoryResponse.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [id]);

    return { recipes, categoryInfo, error };
};

export default useCategorizedRecipes;
