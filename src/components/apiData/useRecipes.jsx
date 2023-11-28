import { useState, useEffect } from "react";
import axios from "./axios";

function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [apiError, setApiError] = useState("");

  const fetchRecipes = async () => {
    try {
      const res = await axios.get("recipe");
      setRecipes(res.data);
      
    } catch (error) {
      setApiError(error.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
    
  }, []);

  return { recipes, apiError };
}

export default useRecipes;
