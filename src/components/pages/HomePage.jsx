import React, { useEffect,useState } from 'react';
import MasterLayout from "../layout/MasterLayout";
import {Button, Col,Row} from 'react-bootstrap';
import featuredImage from '../../assets/images/chef.jpg'
import '../../assets/css/homepage.css'
import RecipePreview from './fragments/RecipePreview';
import ControlledCarousel from './fragments/caraousels'
import icons from '../../assets/images/icons/icons'
import useRecipes from '../apiData/useRecipes';
import { useNavigate } from 'react-router-dom';
function HomePage(props) {
    const { recipes, error } = useRecipes();
    
    const recipePreviewItems = [];
  
    const navigate = useNavigate()
    recipes?.map((recipe) => 
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
            <div>
            {/* featured Component */}
                <Col lg={12} md={12} className='featuredComponent '>
                    <ControlledCarousel img={featuredImage} />
                </Col>

            {/* categories */}
                <Col md={12} lg={12} className='cateogryComponent '>
                    <span className='d-block text-center mb-5 h2'>Categories</span>
                    <div className='d-flex justify-content-between py-3  scroll'>
                        <Button variant='none' className=' iconButton' onClick={()=>navigate(`category/${5}`)}><img src={icons.bakedIcon} alt="baked icon"/><p>Baked</p></Button>
                        <Button variant='none' className=' iconButton' onClick={()=>navigate(`category/${2}`)}><img src={icons.breakfastIcon} alt="breakfast icon"/><p>Breakfast</p></Button>
                        <Button variant='none' className=' iconButton' onClick={()=>navigate(`category/${6}`)}><img src={icons.desertIcon} alt="desert icon"/><p>Desert</p></Button>
                        <Button variant='none' className=' iconButton' onClick={()=>navigate(`category/${1}`)}><img src={icons.dinnerIcon} alt="dinner icon"/><p>Dinner</p></Button>
                        <Button variant='none' className=' iconButton' onClick={()=>navigate(`category/${4}`)}><img src={icons.drinksIcon} alt="drinks icon"/><p>Drinks</p></Button>
                        <Button variant='none' className=' iconButton' onClick={()=>navigate(`category/${3}`)}><img src={icons.lunchIcon} alt="lunch icon"/><p>Lunch</p></Button>
                        <Button variant='none' className=' iconButton' onClick={()=>navigate(`category/${7}`)}><img src={icons.saladIcon} alt="salad icon"/><p>Salad</p></Button>
                        <Button variant='none' className=' iconButton' onClick={()=>navigate(`category/${8}`)}><img src={icons.snacksIcon} alt="snacks icon"/><p>Snacks</p></Button>
                        <Button variant='none' className=' iconButton' onClick={()=>navigate(`category/${10}`)}><img src={icons.soupIcon} alt="soup icon"/><p>Soup</p></Button>
                        <Button variant='none' className=' iconButton' onClick={()=>navigate(`category/${9}`)}><img src={icons.vegIcon} alt="vegeterian icon"/><p>Vegeterians</p></Button>
                    </div>      
                </Col>
                
            {/* Recommendations */}
                <Col className='gapsAndBackground'>
                    <div className=' d-flex justify-content-between mb-2'>
                        <span>Recommendation</span>
                       <Button onClick={()=>navigate('/recommended')} >See All</Button>
                    </div>
                </Col>
                <div className='d-flex scroll justify-content-between'>
                    {/* {recipe?.map((res, index) => (
                        <RecipePreview title={res.title} description={res.description} author={res.author_name} ingredient={res.ingredient_name} />
                    ))} */}
                </div>


            {/* new recipes */}
                <Col  className='gapsAndBackground'>
                    <div className='d-flex justify-content-between mb-2'>
                        <span>New Recipes</span>
                        <Button onClick={()=>navigate('/all-recipes')}>See All</Button>
                    </div>
                </Col>
                <div >
                    {rows}
                </div>
            </div>
        </MasterLayout>  
    )
}

export default HomePage;