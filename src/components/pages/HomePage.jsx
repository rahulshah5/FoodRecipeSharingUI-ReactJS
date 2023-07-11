import React from 'react';
import MasterLayout from "../layout/MasterLayout";
import {Button, Col,Row} from 'react-bootstrap';
import featuredImage from '../../assets/images/chef.jpg'
import '../../assets/css/homepage.css'
import RecipePreview from './fragments/RecipePreview';
import ControlledCarousel from './fragments/caraousels'
import icons from '../../assets/images/icons/icons'

function HomePage(props){

    const recipePreviewItems = [];

    for (let i = 0; i < 4; i++) {
        recipePreviewItems.push(<RecipePreview/>);
    }

    return(
        <MasterLayout>
            <div>
            {/* featured Component */}
                <Col lg={12} md={12} className='featuredComponent '>
                    <ControlledCarousel img={featuredImage} />
                </Col>

            {/* categories */}
                <Col md={12} lg={12} className='cateogryComponent '>
                    <span className='d-block text-center mb-5 h2'>Categories</span>
                    <div className='d-flex justify-content-between  scroll'>
                        <Button variant='none' className=' iconButton'><img src={icons.bakedIcon} alt="baked icon"/><p>Baked</p></Button>
                        <Button variant='none' className=' iconButton'><img src={icons.breakfastIcon} alt="breakfast icon"/><p>Breakfast</p></Button>
                        <Button variant='none' className=' iconButton'><img src={icons.desertIcon} alt="desert icon"/><p>Desert</p></Button>
                        <Button variant='none' className=' iconButton'><img src={icons.dinnerIcon} alt="dinner icon"/><p>Dinner</p></Button>
                        <Button variant='none' className=' iconButton'><img src={icons.drinksIcon} alt="drinks icon"/><p>Drinks</p></Button>
                        <Button variant='none' className=' iconButton'><img src={icons.lunchIcon} alt="lunch icon"/><p>Lunch</p></Button>
                        <Button variant='none' className=' iconButton'><img src={icons.saladIcon} alt="salad icon"/><p>Salad</p></Button>
                        <Button variant='none' className=' iconButton'><img src={icons.snacksIcon} alt="snacks icon"/><p>Snacks</p></Button>
                        <Button variant='none' className=' iconButton'><img src={icons.soupIcon} alt="soup icon"/><p>Soup</p></Button>
                        <Button variant='none' className=' iconButton'><img src={icons.vegIcon} alt="vegeterian icon"/><p>Vegeterians</p></Button>
                    </div>      
                </Col>
                
            {/* Recommendations */}
                <Col className='gapsAndBackground'>
                    <div className=' d-flex justify-content-between mb-2'>
                        <span>Recommendation</span>
                       <Button>See All</Button>
                    </div>
                </Col>
                <div className='d-flex scroll justify-content-between'>
                    {recipePreviewItems}
                </div>

            {/* trendings */}
                <Col  className='gapsAndBackground'>
                    <div className='d-flex justify-content-between mb-2'>
                        <span>Trendings</span>
                       <Button>See All</Button>
                    </div>
                </Col>
                <div className='d-flex scroll justify-content-between'>
                    {recipePreviewItems}
                </div>

            {/* new recipes */}
                <Col  className='gapsAndBackground'>
                    <div className='d-flex justify-content-between mb-2'>
                        <span>New Recipes</span>
                        <Button>See All</Button>
                    </div>
                </Col>
                <div className='d-flex scroll justify-content-between'>
                    {recipePreviewItems}
                </div>
            </div>
        </MasterLayout>  
    )
}

export default HomePage;