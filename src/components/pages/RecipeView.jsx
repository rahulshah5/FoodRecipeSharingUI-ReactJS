import React, { useState,useEffect } from "react";
import MasterLayout from "../layout/MasterLayout";
import { Button, Col,Form, Table, Row,FloatingLabel,Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faStar } from "@fortawesome/free-solid-svg-icons";
import '../../assets/css/recipeView.css'
import { useNavigate, useParams } from "react-router-dom";
import ToastMessage from "./fragments/toast_message";
import axios from '../apiData/axios';
import GetRecipeSteps from "../apiData/GetRecipeSteps";
import GetReviews from "../apiData/GetReview";
import GetRating from "../apiData/GetRatings";
import UserData from "../apiData/UserData";
import { userToken } from "../apiData/UserData";
import PostReviewAndRating from "../apiData/PostReviewAndRating";
import AuthService from "../apiData/AuthService";
function RecipeView(props) {

  const { id } = useParams();
  
  const [recipes, setRecipes] = useState([]);
  const [apiError, setApiError] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const [stepIndex, setStepIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [pausedTime, setPausedTime] = useState(0);
  const [CookingButtonName,setCookingButtonName]=useState('Start Cooking')
  const [variant, setVariant] = useState('primary');

  const { review, reveiwApiError } = GetReviews(id)
  const { rating, ratingApiError } = GetRating(id)

  const [userRating, setUserRating] = useState("");
  const [userReview, setUserReview] = useState("");

  const { userData, userDataError } = UserData()
  const { recipeSteps, recipeStepsApiError } = GetRecipeSteps(id)

  const navigate=useNavigate()

  if (userDataError) {
    setToastMessage(userDataError.msg);
    setShowToast(true)
  }
  if (apiError) {
    setToastMessage(apiError.msg);
    setShowToast(true)
  }
  const getUserData = () => {
    if (userData) {
      return (
        <>
          {userToken == null ? (<p></p>) : (
          <>
          <h5 className="mt-5">Write Your Views.</h5>
          <Form onSubmit={handleReviewSubmit}>
            <FloatingLabel  label="Rate between 1-5" className="mb-3">
              <Form.Control type="number" id="rating" name="rating" min="1" max="5" step="0.5" value={userRating} required onChange={(e) => setUserRating(e.target.value)}></Form.Control>
            </FloatingLabel>
            <FloatingLabel  label="Your views on Recipe!">
              <Form.Control type="text" value={userReview} onChange={(e) => setUserReview(e.target.value)}></Form.Control>
            </FloatingLabel>
            <Form.Group className="mt-3">
              <Button variant="outline-primary" className="px-3" onClick={handleReviewSubmit}>Post</Button>
            </Form.Group>
          </Form>
          </>)}
        </>
      );
    } else {
      return <p>Login to add your views on recipe.</p>;
    }
  };
  
  

  // fetching recipe using id
  const fetchRecipes = async () => {
    try {
      const res = await axios.get(`recipe/${id}`);
      setRecipes(res.data);
      
      
    } catch (error) {
      setApiError(error.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  
  // fetching steps of recipe
  
  if (recipeStepsApiError) {
    setToastMessage(recipeStepsApiError.msg);
    setShowToast(true)
  }

  // fetching reviews and rating

  if (reveiwApiError) {
    setToastMessage(reveiwApiError.msg);
    setShowToast(true)
  }
  if (ratingApiError) {
    setToastMessage(ratingApiError.msg);
    setShowToast(true);
  }
  review?.sort((a, b) => a.id - b.id);
  rating?.sort((a, b) => a.id - b.id);
 

  
  const handleReviewSubmit = async (e) => {
      e.preventDefault();
      try {
        const { review, rating, error } = await PostReviewAndRating(id, userRating, userReview);
        if (!error) {
          setShowToast(true);
          setToastMessage("Successfully posted");
          window.location.reload()
        } else {
          setShowToast(true);
          setToastMessage(`Error posting review: ${error.message}`);
        }
      } catch (error) {
        setShowToast(true);
        setToastMessage(`Error posting review: ${error.message}`);
      }
    };



  const handleFavourite = async (id) => {
    try {
      const res = await axios.post('favourite/', { recipe: id }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user').replace(/"/g, '')}`,
        },
      });
      console.log(res)
      setToastMessage(res.data.msg);
      setShowToast(true);
    } catch (error) {
      if (!AuthService.getCurrentUser()) {
        navigate('/login')
        return
      }
      console.log(error)
      setToastMessage(error.response.data.msg);
      setShowToast(true);

    }
  };
  
  


  useEffect(() => {
    let timer;
    if (timerRunning && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timerRunning && timeRemaining === 0) {
      setTimerRunning(false);
      if (stepIndex < recipeSteps.length - 1) {
        setStepIndex((prevIndex) => prevIndex + 1);
        startTimerForNextStep();
      }
    }
    return () => clearTimeout(timer);
  }, [timerRunning, timeRemaining, stepIndex]);

  const startTimerForNextStep = () => {
    var timeForCurrentStep;
    if (pausedTime > 0) { 
      timeForCurrentStep = pausedTime
    } else {
      timeForCurrentStep=recipeSteps[stepIndex]?.time_in_minutes * 60;
    }
    setTimeRemaining(timeForCurrentStep);
    setTimerRunning(true);
  };

  const handleStartCooking = () => {
    if (CookingButtonName === 'Start Cooking' || CookingButtonName === "Resume") {
      setCookingButtonName('Stop');
      setVariant('danger');
      startTimerForNextStep();
    } else {
      setCookingButtonName('Resume');
      setVariant('success');
      setPausedTime(timeRemaining); 
      setTimerRunning(false); 
    }
  };

  return (
    <MasterLayout>
      {/* Toast component */}
      <ToastMessage show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />
      <div className="d-flex flex_wrap topSection mt-5">
        
        <Col xs="12" lg="6" sm="12" md="12" className="px-3">
          <img src={recipes.image_url} alt="Recipe" width="100%" />
        </Col>

        <Col xs="12" sm="12" lg="6" md="12" className="padding5 mt-4">
          <h3>{ recipes.title }</h3>
          <p className="m-0">
            <span className="small ">{recipes.author_name}</span>
            <span className="mx-5 small">
              <FontAwesomeIcon icon={faStar} id="starIcon" />
              {recipes.average_rating}{" "}
            </span>
          </p>
          <p className="textJustify">
            {recipes.description}
          </p>
          <div className="mt-4">
              <Button variant="danger" onClick={() => handleFavourite(id)}>Add to Favourite</Button>
          </div>
        </Col>
      </div>

      <Col lg="6" sm="12" xs="12" className="px-5 ">
        <Row className="mt-4 sectionBackground basicInfo">
          <Col lg="6" xs="12" className="d-flex flex-column ">
            <span> Cooking Time: {recipes.cooking_time} mins</span>
            <span className="pt-2">Category: {recipes.category_name}</span>
          </Col>
          <Col xs="12" lg={6} className="d-flex flex-column">
            <span>Servings: {recipes.servings}</span>
            <span className="pt-2">Number of Ingredients:    {recipes?.ingredient_names?.length} </span>
          </Col>
        </Row>
        <h4 className="mt-5 mb-4">Ingredients</h4>
        <div className="sectionBackground">
          
          <ul className="pb-3">
             { recipes?.ingredient_names?.map((item1, index) => (
                <li key={index}>{item1}</li>
              ))}

          </ul>
        </div>


        <div className="h4 mt-5">Recipe Steps</div>
        <div className="mt-4 sectionBackground">
          <Table responsive borderless hover size="sm" className="table-custom">
            <thead >
              <tr>
                <th>Steps</th>
                <th>Description</th>
                <th colSpan={2}>Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody >
              
              {recipeSteps.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.step_number}.</td>
                    <td>{item.description}</td>
                    <td>{item.time_in_minutes} </td>
                    <td> min</td>
                  </tr>
                )
              })}
              
            </tbody>
          </Table>

        </div>
       
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>
              <h1>{timeRemaining}s</h1>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Step {stepIndex + 1}</Card.Subtitle>
            <Card.Text>{recipeSteps[stepIndex]?.description}</Card.Text>
            <Button className="mt-2" variant={variant} onClick={handleStartCooking}>
              {CookingButtonName}
            </Button>
          </Card.Body>
        </Card>
        {/* reviews and ratings */}
        
        {getUserData()}
        
        
        <div className=" mt-4 sectionBackground">
          <h5>Reviews</h5>
          {review.map((item, index) => {
            return (
              <div className=" mt-4 d-flex flex-column reviewSection">
                <span className="fs-6">{item.author_name}</span>
                <span className="fs-6 font-small">
                  {rating[index]?.rating}
                  <FontAwesomeIcon icon={faStar} id="starIcon" />{" "}
                  <span className="fs-6 px-5">{item.created_at_date} </span>
                </span>

                <span className="fs-6 pt-2">
                  {item.content}
                </span>
                
              </div>
            )
          })}
          
        </div>
      </Col>
      <Col lg="6" sm="12" xs="12" className="px-5 mt-3">
        
      </Col>
    </MasterLayout>
  );
}

export default RecipeView;
