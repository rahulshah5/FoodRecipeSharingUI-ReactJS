import { useEffect, useState } from "react";
import API from "./axios";

function GetFeaturedContents() {
  const [featuredResponse, setFeaturedResponse] = useState([]);
  const [featuredApiError, setFeaturedApiError] = useState([]);
  const country = localStorage.getItem('country');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`get-high-rated-recipes/?country=${country}`);
        setFeaturedResponse(response.data);
      } catch (error) {
        setFeaturedApiError(error);
      }
    };

    if (country) {
      fetchData();
    }
  }, [country]);

  return { featuredResponse, featuredApiError };
}

export default GetFeaturedContents;
