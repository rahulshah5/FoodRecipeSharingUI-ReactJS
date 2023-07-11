import {React,useState} from 'react'
import MasterLayout from "../layout/MasterLayout";
import {Col, Form,Row,Button} from 'react-bootstrap'
function AddRecipe(props){
    const [recipeName,setRecipeName]=useState('');
    const [cookingTime,setCookingTime]=useState('');
    const [difficultyLevel,setDifficultyLevel]=useState('');
    const [recipeImage,setRecipeImage]=useState(null);
    const [selectedCategories, setselectedCategories] = useState([]);
    const [recipeTags,setRecipeTags]=useState('');



    const handleSelectChange = (e) => {
        const selectedValues = Array.from(e.target.selectedCategories, (option) => option.value);
        setselectedCategories(selectedValues);
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setRecipeImage(file);
    };

    const handleSubmit=(e)=>{

        e.preventDefault();

        // Process form data
        // ...
    
        // Reset form fields
        

    };


    return(
        <MasterLayout>
            
                <Col lg={2}></Col>
                <Col lg={8} className='px-4 mt-4'>
                    <div className='h3 my-3'>
                        Recipe Details
                    </div>
                    <Form className='' onSubmit={handleSubmit}>
                        <Form.Group className='mb-4' controlId='RecipeName'>
                            <Form.Label>Recipe Name</Form.Label>
                            <Form.Control type='text' placeholder='Recipe Name' value={recipeName} onChange={(e) => setRecipeName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="mySelect" className='mb-4'>
                            <Form.Label>Select Categories</Form.Label>
                            {/* <Form.Control as="select" multiple value={selectedCategories} onChange={handleSelectChange}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            <option value="option4">Option 4</option>
                            </Form.Control> */}

                            
                        </Form.Group>

                        <Row>
                            <Col sm={12}>
                                <Form.Group className='mb-4' controlId='CookingTime'>
                                    <Form.Label>Cooking Time</Form.Label>
                                    <Form.Control type='number' placeholder='Enter time in minutes. ex( 30, 60, 120)'  value={cookingTime} onChange={(e)=>setCookingTime(e.target.value)}/>
                                </Form.Group>
                            </Col>

                            <Col sm={12}>
                                <Form.Group className='mb-4' controlId='DifficultyLevel'>
                                    <Form.Label>Difficulty Level</Form.Label>
                                    <Form.Select value={difficultyLevel} onChange={(e)=>setDifficultyLevel(e.target.value)}>
                                        <option value="Hard">Hard</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Easy">Easy</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        



                        <Form.Group className='mb-4' controlId='Tags'>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control type='text' placeholder='use comma (,) between each tag' value={recipeTags} onChange={(e)=>setRecipeTags(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className='mb-4' controlId='image'>
                            <Form.Label>Select Image</Form.Label>
                            <Form.Control type='file' accept="image/jpeg, image/png"  onChange={handleImageChange}/>
                        </Form.Group>

                        <hr />

                        <Button type='submit'>Submit</Button>

                    </Form>
                </Col>
                <Col></Col>
            
        </MasterLayout>
    )
}

export default AddRecipe;