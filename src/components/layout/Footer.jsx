import React from 'react'
import {NavLink} from "react-router-dom";
import {Nav,Col,Navbar} from 'react-bootstrap'
import '../../assets/css/footer.css'
export default function Footer(props){
    return(
        <div className='d-flex mt-5 p-5 footerOutline'>
            <Col lg={3} xs={12} sm={6} md={4}>
                <h1>Cookiee</h1>
                <p>Lorem ipsum dolor sit temporibus error fugiat fuga minima tempore id!</p>
            </Col>
            <Col lg={3} xs={12} sm={6} md={4} className=''>
                <p className='px-5'>Links</p>
                
                <Nav variant="pills" className='d-flex flex-column px-5 mt-2 justify-content-around'>
                    <NavLink to="/#" className='text-decoration-none'>Home</NavLink>
                    <NavLink to="/login" className=' text-decoration-none'>Login</NavLink>
                    <NavLink to="/profile" className=' text-decoration-none'>Profile</NavLink>
                    <NavLink to="/post-recipe" className=' text-decoration-none'>Add Recipe</NavLink>
                    <NavLink to="/recipe" className=' text-decoration-none'> Recipe</NavLink>
                    <NavLink to="/category" className=' text-decoration-none'>Category</NavLink>
                </Nav>
                
            </Col>
        </div>
    )
}