import React from 'react';
import MasterLayout from "../layout/MasterLayout";
import profileImage from '../../assets/images/1.jpeg';
import '../../assets/css/profilePage.css'
import RecipePreview from '../layout/RecipePreview';
import {Col,Button} from 'react-bootstrap';
import '../../assets/css/homepage.css'

function ProfileUser(props){
    return(
        <MasterLayout>
            <Col lg={12} className='userInfo mt-5 d-flex '>
                <div className='profilePicture d-flex flex-column align-items-center'>
                    <img src={profileImage} alt="profile" height='68%' width='auto' />
                    <caption>Profile Picture</caption>
                    <Button>Change</Button>
                </div>
                <div className='mt-2 px-5 d-flex flex-column '>
                    <p>Name : XYZ</p>
                    <p>Email: xyz@gmail.com</p>
                    <p>Recipes: 123</p>
                    <p>Favourites: 123</p>
                    <Button>Edit Profile</Button>
                </div>
            </Col>


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