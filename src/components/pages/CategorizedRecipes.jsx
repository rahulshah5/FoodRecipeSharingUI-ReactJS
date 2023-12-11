import React from 'react';
import { useParams } from 'react-router-dom';
import UseCategorizedRecipes from '../apiData/getCategorizedRecipes';
import RecipePreview from './fragments/RecipePreview';
import MasterLayout from '../layout/MasterLayout';
import axios from '../apiData/axios'
function CategorizedRecipes() {
    const { id } = useParams();
    const { categorized_recipes,categoryInfo, error } = UseCategorizedRecipes(id);
    



    if (error) {
        return <div>Error: {error}</div>;
    }

    const recipePreviewItems = categorized_recipes.map((recipe) => (
        <RecipePreview key={recipe.id} recipe={recipe} />
    ));

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

    return (
        <>
            <MasterLayout>
                <h4 className='d-inline mt-5 text-muted d-inline'>Category  {categoryInfo.name }</h4>
                <div>
                    {categorized_recipes.length === 0 ? (
                        <p>No recipes found</p>
                    ) : (
                        <div>
                            {rows}
                        </div>
                    )}
                </div>
            </MasterLayout>
        </>
    );
}

export default CategorizedRecipes;
