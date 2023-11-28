import React from 'react'
import {Form, Button} from 'react-bootstrap'
function UserDetailsForm(props){
    return(
        <Form className='mt-4 d-flex flex-wrap flex-column justify-content-center' >
                            
            <Form.Group className="mb-2" controlId="loginform.email">
                <Form.Control type="text" placeholder="Full Name" value={ props.fullname} />
            </Form.Group>
            
            <Form.Group className="mb-2" controlId="loginform.email">
                <Form.Control type="email" placeholder="Email address" value={props.email} />
            </Form.Group>
            
            <Form.Group className="mb-2" controlId="loginform.password">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Form.Group className="mb-2" controlId="loginform.password2">
                <Form.Control type="password" placeholder="Confirm Password"/>
            </Form.Group>
            
            <Form.Group className="mb-2" controlId="loginform.gender">
                <Form.Select aria-label="Gender" value={props.gender}>
                    <option>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-2" controlId="loginform.country">
                <Form.Select aria-label="Gender" value={props.country}>
                    <option>Select Country</option>
                    <option value="Nepal">Nepal</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>
                </Form.Select>
            </Form.Group>

            <Button type="submit" className='btn-primary text-center h5  py-2 mt-3'>{props.buttonName}</Button>

        </Form>
    )
}
export default UserDetailsForm;