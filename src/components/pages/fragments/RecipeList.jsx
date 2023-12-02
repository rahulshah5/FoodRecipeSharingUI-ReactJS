import React from 'react';
import { Table } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

const RecipeList = ({ data }) => {
    const navigate=useNavigate()
    
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>No of Ingredients</th>
          <th>Cooking_time</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr key={index} onClick={()=>navigate(`/recipes/${item.recipe?item.recipe:item.id}`)}>
            <td>{index + 1}</td>
            <td>{item.recipe_title?item.recipe_title:item.title}</td>
            <td>{item.author_name}</td>
            <td>{item.recipe_ingredients?item.recipe_ingredients:item.ingredients.length}</td>
            <td>{item.recipe_cooking_time?item.recipe_cooking_time:item.cooking_time} min</td>
            {/* Render other data fields accordingly */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RecipeList;
