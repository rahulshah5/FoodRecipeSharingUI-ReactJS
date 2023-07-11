import React,{useState} from 'react';
import MasterLayout from "../layout/MasterLayout";
import profileImage from '../../assets/images/1.jpeg';
import '../../assets/css/profilePage.css'
import RecipePreview from './fragments/RecipePreview';
import {Col,Button, Container,Row, Modal, Form } from 'react-bootstrap';
import '../../assets/css/homepage.css'
import UserDetailsForm from './fragments/UserDetailsForm';
function ProfileUser(props){

    const [showForm, setShowForm] = useState(false);
  
    const handleShowForm = () => {
      setShowForm(true);
    };
  
    const handleCloseForm = () => {
      setShowForm(false);
    };
    return(
        <MasterLayout>
            <Container>
                <Row className='mt-4'>
                    <Col lg={6} sm={12} className=' d-flex flex-column justify-content-center profilePicture'>
                        <img src={profileImage} alt="profile" height='70%' width='auto' />
                        <caption className='text-center'>Profile Picture</caption>
                    </Col>

                    <Col lg={6} sm={12}>
                        <div className='mt-4  d-flex flex-column userDetails '>
                            <h5>User Details</h5>
                            <p>Name : XYZ</p>
                            <p>Email: xyz@gmail.com</p>
                            <p>Recipes: 123</p>
                            <p>Favourites: 123</p>
                            <Button onClick={handleShowForm}>Edit Profile</Button>

                            {/* edit profile pop-up form */}
                            <Modal show={showForm} onHide={handleCloseForm}>
                                <Modal.Header closeButton>
                                <Modal.Title>Edit Details</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <UserDetailsForm buttonName='Save'/>
                                </Modal.Body>
                                <Modal.Footer>
                                
                                </Modal.Footer>
                            </Modal>

                        </div>
                    </Col>
                </Row>
            </Container>


            <Col lg={12} className='d-block gapsAndBackground'>
                <div className='d-flex justify-content-between mb-2'>
                    <span>Favourites</span>
                </div>
                <RecipePreview/>
            </Col>
        </MasterLayout>
    )
}

export default ProfileUser;