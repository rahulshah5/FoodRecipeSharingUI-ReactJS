import React from 'react';
import MasterLayout from "../layout/MasterLayout";
import {Button, Col} from 'react-bootstrap';
import featuredImage from '../../assets/images/chef.jpg'
import '../../assets/css/homepage.css'
import RecipePreview from '../layout/RecipePreview';

function HomePage(props){

    return(
        <MasterLayout>
            <div>
            {/* featured Component */}
                <Col lg={12} className='featuredComponent d-flex '>
                    <div>
                        <img src={featuredImage} alt="featured Recipe" height="100%" width="auto" /> 
                    </div>
                    <div>
                        <p className='recipeTexts'>Ginger Tea</p>
                        <p className='recipeTexts'>5 Ingredients</p>
                        <p className='recipeTexts'> 4.5 Stars</p>
                        <p className='recipeTexts'>Raju Bhagat</p>
                    </div>
                </Col>

            {/* categories */}
                <Col lg={12}  className='cateogryComponent'>
                    <span className='d-block mb-2'>Categories</span>
                    <button className='h-50 iconButton'><img src={featuredImage} alt="category icons" height="100%" width="auto"/></button>
                </Col>
                
            {/* Recommendations */}
                <Col lg={12}  className='gapsAndBackground'>
                    <div className='d-flex justify-content-between mb-2'>
                        <span>Recommendation</span>
                       <Button>See All</Button>
                    </div>
                    <RecipePreview/>
                </Col>

            {/* trendings */}
                <Col lg={12} className='gapsAndBackground'>
                    <div className='d-flex justify-content-between mb-2'>
                        <span>Trendings</span>
                       <Button>See All</Button>
                    </div>
                    <RecipePreview/>
                </Col>

            {/* new recipes */}
                <Col lg={12} className='gapsAndBackground'>
                    <div className='d-flex justify-content-between mb-2'>
                        <span>New Recipes</span>
                        <Button>See All</Button>
                    </div>
                    <RecipePreview/>
                </Col>
                
            </div>
        </MasterLayout>  
    )
}

export default HomePage;