import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faStar } from "@fortawesome/free-solid-svg-icons";

export default function RecipePreviewCols(prop) {
    const navigate = useNavigate();

    const navigateToRecipe = () => {
        navigate(`/recipes/${prop.items.id}`);
        window.location.reload()
    };
    return (
        <Card id="recipe rows" style={{ width: 'auto', height:"auto" }} className='mt-3 p-3' onClick={navigateToRecipe}>
        <div className="row g-0" >
            <div className="col-md-4 d-flex ">
            <Card.Img src={prop.items.image_url}  alt="Card image" />
            </div>
            <div className="col-md-8">
            <Card.Body>
                <Card.Title>{prop.items.title}</Card.Title>
                        <Card.Text>
                            <div><FontAwesomeIcon icon={faStar} id="starIcon" /> { prop.items.average_rating}</div>
                            <div>{ prop.items.description.slice(0,120)}...</div>
                </Card.Text>
            </Card.Body>
            </div>
        </div>
        </Card>
    );
} 