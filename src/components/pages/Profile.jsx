import React,{useEffect, useState} from 'react';
import MasterLayout from "../layout/MasterLayout";
import profileImage from '../../assets/images/1.jpeg';
import '../../assets/css/profilePage.css'
import RecipePreview from './fragments/RecipePreview';
import {Col,Button, Container,Row, Modal, Form } from 'react-bootstrap';
import '../../assets/css/homepage.css'
import ToastMessage from './fragments/toast_message';
import UserProfileEditForm from './fragments/UserProfileEditForm'
import AuthService from '../apiData/AuthService'
import UserData from '../apiData/UserData';
import { useNavigate } from 'react-router-dom';
import RecipeList from './fragments/RecipeList';
function ProfileUser(props) {
    const navigateTo=useNavigate()
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [showForm, setShowForm] = useState(false);
    const { userData, favourites, userDataError } = UserData()
    
    if (userDataError) {
        setToastMessage(userDataError)
        setShowToast(true)
    }

    const logoutUser = () => {
        AuthService.logout();
        navigateTo('home/')
    }
    const user_d = userData.user
    const user_recipes = userData.recipes



    const handleShowForm = () => {
      setShowForm(true);
    };
  
    const handleCloseForm = () => {
      setShowForm(false);
    };
    
    const Date = user_d?.created_at.slice(0,10)
        
    const recipePreviewItems = [];
    
    if (user_recipes) {
        user_recipes.map((recipe) =>
            recipePreviewItems.push(<RecipePreview recipe={recipe} />)
        );
    }
  
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
            <ToastMessage show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />

            <Container>
                <Row className='mt-4'>
                    <Col lg={6} sm={12} className=' d-flex flex-column justify-content-center profilePicture'>
                        <img src={profileImage} alt="profile" height='70%' width='auto' />
                        <caption className='text-center'>Profile Picture</caption>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className='mt-4  d-flex flex-column userDetails '>
                            {user_d ?
                            <>
                            <h5>User Details</h5>
                            <p>Name : {user_d.full_name}</p>
                            <p>Email: {user_d.email }</p>
                            <p>Country: { user_d.country}</p>
                            <p>Gender: {user_d.gender}</p>
                            <p>Account Created at: {Date }</p>
                            <Button onClick={handleShowForm} className='mb-2 mt-3'>Change Password</Button>
                            <Button onClick={logoutUser} className=''>Logout</Button></> :<></>}

                            {/* edit profile pop-up form */}
                            <Modal show={showForm} onHide={handleCloseForm}>
                                <Modal.Header closeButton>
                                <Modal.Title>Change Password</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <UserProfileEditForm  buttonName='Save'/>
                                </Modal.Body>
                                <Modal.Footer>
                                
                                </Modal.Footer>
                            </Modal>

                        </div>
                    </Col>
                </Row>
            


            <Row  className='d-block gapsAndBackground'>
                <div className='d-flex justify-content-between mb-2'>
                    <div className='mb-3 fw-bold'>Favourites</div>
                </div>
                <RecipeList data={favourites} />
                

                <div className='mt-4'>
                    <hr/>
                    <div className='mt-3 fw-bold'>My Recipes</div><br/>
                </div>
                <RecipeList data={user_recipes}/>
               

            </Row></Container>
        </MasterLayout>
    )
}

export default ProfileUser;