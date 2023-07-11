import React from 'react'
import recipeImage from '../../../assets/images/chef.jpg'
import '../../../assets/css/recipePreview.css'
import {Row,Col,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faStar } from '@fortawesome/free-solid-svg-icons';
function RecipePreview(prop){
    return(
        <Col xs={6} lg={3}  className="recipeOutline">
            <Button variant="none" className='favButton'><FontAwesomeIcon icon={faHeart}  /></Button>
            <img src={recipeImage} className='recipeImage' alt="recipeImage" height="75%" width="100%"/>
            <Row className=' recipeDetailsBox'>
                <Col  xs={8} sm={7}  className='' >
                    <p className='recipeTexts authorName'>Raju Bhagat</p>
                    <p className='recipeTexts recipeName'>Ginger Tea</p>
                </Col>
                <Col xs={4} sm={5} className=''>
                    <p className='recipeTexts recipeRating'> <FontAwesomeIcon icon={faStar} id='starIcon' />4.5  </p>
                    <p className='recipeTexts recipeIngredients'>5 Ingredients</p>
                </Col>
            </Row>
        </Col>
    )
}

export default RecipePreview;