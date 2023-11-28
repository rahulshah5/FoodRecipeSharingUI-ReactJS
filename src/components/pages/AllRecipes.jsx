import React from 'react'
import MasterLayout from "../layout/MasterLayout";
import RecipePreview from './fragments/RecipePreview';
import useRecipes from '../apiData/useRecipes';
function AllRecipes(props) {
    const { recipes, error } = useRecipes();
    const recipePreviewItems = [];
    recipes.map((recipe) => 
        recipePreviewItems.push(<RecipePreview recipe={recipe } />)
    );
     const rows = [];
    for (let i = 0; i < recipePreviewItems.length; i += 4) {
        const rowItems = recipePreviewItems.slice(i, i + 4);
        rows.push(
            <div className="row" key={i}>
                {rowItems.map((item, index) => (
                    <div className="col-md-3" key={index}>
                        {item}
                    </div>
                ))}
            </div>
        );
    }
    
    return(
        <MasterLayout>
            {recipePreviewItems}
        </MasterLayout>
    )
}

export default AllRecipes;