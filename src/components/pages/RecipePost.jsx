import {React,useState} from 'react'
import MasterLayout from "../layout/MasterLayout";
import {Col, Form,Button} from 'react-bootstrap'
function RecipePost(props){
    const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };
    return(
        <MasterLayout>
            
                <Col lg={2}></Col>
                <Col lg={8} className='mt-5'>
                    <div className='h3 my-3'>
                        Recipe Details
                    </div>
                    <Form className='py-3 '>
                        <Form.Group className='mb-3' controlId='RecipeName'>
                            <Form.Label>Recipe Name</Form.Label>
                            <Form.Control type='text' placeholder='Recipe Name' />
                        </Form.Group>

                        <Form.Group controlId="mySelect" className='mb-3'>
                            <Form.Label>Select Multiple Options</Form.Label>
                            <Form.Control as="select" multiple value={selectedOptions} onChange={handleSelectChange}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            <option value="option4">Option 4</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-2' controlId='CookingTime'>
                            <Form.Control type='num' placeholder='Cooking Time in minutes' />
                        </Form.Group>

                        <Form.Group className='mb-2' controlId='DifficultyLevel'>
                            <Form.Select type='text' placeholder=''>
                                <option value="breakfast">Breakfast</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="breakfast">Breakfast</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className='mb-2' controlId='Tags'>
                            <Form.Control type='text' placeholder='Tags' />
                        </Form.Group>

                    </Form>
                </Col>
                <Col></Col>
            
        </MasterLayout>
    )
}

export default RecipePost;