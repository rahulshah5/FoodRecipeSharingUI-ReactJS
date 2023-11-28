import React from 'react'
import recipeImage from '../../../assets/images/chef.jpg'
import '../../../assets/css/recipePreview.css'
import {Row,Col,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate,useHistory  } from 'react-router-dom';
function RecipePreview(prop) {
   const navigate = useNavigate();

    const navigateToRecipe = () => {
        navigate(`/recipes/${prop.recipe.id}`);
    };
    return(
        <Col xs={6} lg={3}  className="recipeOutline">
            
            <img src={prop.recipe.image_url} className='recipeImage' alt="recipeImage" height="180rem" width="100%"  onClick={navigateToRecipe}/>
            <Row className=' recipeDetailsBox'>
                <Col  xs={8} sm={7}  className='' >
                    <p className='recipeTexts recipeName'>{ prop.recipe.title}</p>
                    <p className='recipeTexts authorName'>by { prop.recipe.author_name}</p>
                </Col>
                <Col xs={4} sm={5} className=''>
                    <p className='recipeTexts recipeRating'> { prop.recipe.cooking_time} Minutes </p>
                    <p className='recipeTexts recipeIngredients'>{ prop.recipe.ingredient_names.length} Ingredients</p>
                </Col>
            </Row>
        </Col>
    )
}

export default RecipePreview;