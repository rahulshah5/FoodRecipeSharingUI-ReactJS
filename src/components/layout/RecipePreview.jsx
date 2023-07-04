import React from 'react'
import recipeImage from '../../assets/images/chef.jpg'
import '../../assets/css/recipePreview.css'
import {Row,Col} from 'react-bootstrap';

function RecipePreview(prop){
    return(
        <Col lg={3} xs={6} sm={6} className="recipeOutline">
            <button className='favButton'>O</button>
            <img src={recipeImage} className='recipeImage' alt="recipeImage" height="75%" width="100%"/>
            <Row className='px-3'>
                <Col md={8}>
                    <p className='recipeTexts'>Ginger Tea</p>
                    <p className='recipeTexts'>5 Ingredients</p>
                </Col>
                <Col >
                    <p className='recipeTexts'> 4.5 Stars</p>
                    <p className='recipeTexts'>Raju Bhagat</p>
                </Col>
                
            </Row>
        </Col>
    )
}

export default RecipePreview;