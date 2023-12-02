import {React,useState} from 'react'
import MasterLayout from "../layout/MasterLayout";
import { Col, Form, Row, Button } from 'react-bootstrap'
import axios from "../apiData/axios"
import AddRecipeStep from './AddRecipeStep';
import toast_message from './fragments/toast_message';
import { useNavigate } from 'react-router-dom';
function AddRecipe(props){
    const [title,setRecipeName]=useState('');
    const [cooking_time,setCookingTime]=useState('');
    const [difficulty_level,setDifficultyLevel]=useState('Easy');
    const [image,setRecipeImage]=useState('');
    const [category, setselectedCategories] = useState('');
    const [tags, setRecipeTags] = useState('');
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
  const [servings, setServings] = useState("");

  
    const navigate=useNavigate()
  
//  setting image into var
    const handleImageChange = (e) => {
      setRecipeImage(e.target.files[0])
      console.log(image)
    };

  
  //  handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

  // Getting user access token
  const userToken = localStorage.getItem("user");

    try {
    
    const res = await axios.post("post-recipe/", {
      title,
      description,
      category,
      ingredients,
      cooking_time,
      difficulty_level,
      tags,
      servings,
      image
    }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${userToken.replace(/"/g, "")}`,
      }
    });

      console.log(res.data); // Check the entire response object
      navigate(`/recipe-step/${res.data.data.id}`);
   
  } catch (error) {
    console.error(error);
    // Display error message
  }
};




    return (
      <MasterLayout>
        <Col lg={2}></Col>
        <Col lg={8} className="px-4 mt-4">
          <div className="h3 my-3">Recipe Details</div>
          <Form className="" onSubmit={handleSubmit}>
                    
            <Form.Group className="mb-4" controlId="RecipeName">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control type="text" placeholder="Recipe Name"  onChange={(e) => setRecipeName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Description</Form.Label>
              <Form.Control type='text' placeholder='Tell us about the recipe.'  onChange={(e)=>setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="mySelect" className="mb-4">
              <Form.Label>Select Categories</Form.Label>
              <Form.Select  onChange={(e) => setselectedCategories(e.target.value)} >
                    <option >Select category</option>
                    <option value="baked">Baked</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="desert">Desserts</option>
                    <option value="dinner">Dinner</option>
                    <option value="drinks">Drinks</option>
                    <option value="lunch">Lunch</option>
                    <option value="salad">Salad</option>
                    <option value="snacks">Snacks</option>
                    <option value="soup">Soup</option>
                    <option value="veg">Vegeterian</option>
                  </Form.Select>
            </Form.Group>

            <Row>
              <Col sm={12}>
                <Form.Group className="mb-4" controlId="CookingTime">
                  <Form.Label>Cooking Time</Form.Label>
                  <Form.Control type="number" placeholder="Enter time in minutes. ex( 30, 60, 120)" onChange={(e) => setCookingTime(e.target.value)} />
                </Form.Group>
              </Col>
              <Col sm={12}>
                <Form.Group className="mb-4" controlId="servings">
                  <Form.Label>Servings</Form.Label>
                  <Form.Control type="number" placeholder="Number of Servings" onChange={(e) => setServings(e.target.value)} />
                </Form.Group>
              </Col>

              <Col sm={12}>
                <Form.Group className="mb-4">
                  <Form.Label>Difficulty Level</Form.Label>
                  <Form.Select  onChange={(e) => setDifficultyLevel(e.target.value)} >
                    <option value="Hard">Hard</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Easy" selected>Easy</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-4" controlId="Tags">
              <Form.Label>Tags</Form.Label>
              <Form.Control type="text" placeholder="use comma (,) between each tag"  onChange={(e) => setRecipeTags(e.target.value.split(','))} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="Tags">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control type="text" placeholder="use comma (,) between each tag"  onChange={(e) => setIngredients(e.target.value.split(','))} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="image">
              <Form.Label>Select Image</Form.Label>
              <Form.Control type="file" accept="image/jpeg, image/png" onChange={handleImageChange} />
            </Form.Group>       

            <Button type="submit">Submit</Button>
          </Form>
        </Col>
        <Col></Col>
      </MasterLayout>
    );
}

export default AddRecipe;