import React from 'react';
import {Button,Nav,Form,Col} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
 function NavbarLayout(props){


    return(
        <div className='d-flex mt-3  align-items-center'>
            <Col lg='2'>
                <h2>Cookiee</h2>            
            </Col>
            <Col lg='7'>
                <Nav variant="pills" className='justify-content-around'>
                    <NavLink to="/#" className='text-decoration-none px-3 py-2'>Home</NavLink>
                    <NavLink to="/login" className=' text-decoration-none px-3 py-2'>Login</NavLink>
                    <NavLink to="/profile" className=' text-decoration-none px-3 py-2'>Profile</NavLink>
                    <NavLink to="/post-recipe" className=' text-decoration-none px-3 py-2'>Add Recipe</NavLink>
                    <NavLink to="/recipe" className=' text-decoration-none px-3 py-2'> Recipe</NavLink>
                    <NavLink to="/category" className=' text-decoration-none px-3 py-2'>Category</NavLink>
                </Nav>
            </Col>

            <Col lg='3'>
                <Form className="d-flex">
                    <Form.Control size="sm" type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button variant="outline-primary" size="sm" className=''>Search</Button>
                </Form>
            </Col>
                    
        </div>
    )
}

export default NavbarLayout;