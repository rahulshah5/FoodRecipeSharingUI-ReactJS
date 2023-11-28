import React, { useState, useEffect } from 'react';
import axios from './axios';

export default function GetRecipeById(props) {
  const [recipes, setRecipes] = useState([]);
  const [apiError, setApiError] = useState("");
  const fetchRecipes = async () => {
    try {
      const res = await axios.get(`recipe/${props.id}`);
      setRecipes(res.data);
    } catch (error) {
      setApiError(error.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes, apiError};
}
