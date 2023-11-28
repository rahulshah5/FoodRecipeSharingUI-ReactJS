import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from '../apiData/axios';
import MasterLayout from '../layout/MasterLayout';
import { useParams } from 'react-router-dom';

const AddRecipeStep = () => {
  const [steps, setSteps] = useState([]);
  const {id}=useParams()
  useEffect(() => {
    console.log('Steps updated:', steps);
    // Make your API call here
    // Ensure that the necessary logic for making the API call is handled properly
  }, [steps]);

  const handleAddNewStep = () => {
  const newStep = {
    recipe_name: id,
    step_number: (steps.length + 1).toString(),
    description: '',
    time_in_minutes: '',
  };

  setSteps(prevSteps => [...prevSteps, newStep]);
};


  const handleEditStep = (index, fieldName, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index][fieldName] = value;
    setSteps(updatedSteps);
  };

  const handleSubmit = async () => {
    console.log('Steps to submit:', steps);
    try {
      // Mock API call using axios
      let userToken = localStorage.getItem('user');
      const response = await axios.post('post-recipe-steps/', { items: steps }, {
        headers: {
          Authorization: `Bearer ${userToken.replace(/"/g,'')}`
        }
      });
      console.log('Response:', response.data);
      // Handle success or additional operations after saving
    } catch (error) {
      console.error('Error:', error);
      // Handle error cases
    }
  };

  return (
    <MasterLayout>
    <div>
      {steps.map((step, index) => (
        <Row key={index}>
          <Form.Group className="mb-4" as={Col}>
            <Form.Control
              type="text"
              placeholder="Step description"
              onChange={(e) => handleEditStep(index, 'description', e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4" as={Col}>
            <Form.Control
              type="number"
              placeholder="Step time"
              onChange={(e) => handleEditStep(index, 'time_in_minutes', e.target.value)}
            />
          </Form.Group>
        </Row>
      ))}
      <Button onClick={handleAddNewStep}>Add Step</Button>
      {steps.length > 0 && (
        <Button variant="success" onClick={handleSubmit}>
          Submit
        </Button>
      )}
      </div>
      </MasterLayout>
  );
};

export default AddRecipeStep;
