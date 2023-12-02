import axios from '../../apiData/axios'
import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
function UerProfileEditForm(props) {
    const [old_password,setOldPassword]=useState('')
    const [new_password,setPassword]=useState('')
    const [confirm_password,setConfirmPassword]=useState('')


    const handleSubmit = async () => {
        if (new_password === confirm_password) {
            
        
            try {
                const res = await axios.patch('change-password/', {
                    oldpassword: old_password,
                    password: new_password
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('user').replace(/"/g,"")}`, 
                    }
                });
                console.log(res.data)
            } catch (error) {
                alert(error.msg)
            }
        } else {
            alert("new password and confirm password doesn't match")
        }
    }

    return(
        <Form className='mt-4 d-flex flex-wrap flex-column justify-content-center' onSubmit={handleSubmit}>

            <Form.Group className="mb-2" controlId="loginform.email">
                <Form.Control type="password" placeholder="Old Password"   onChange={(e)=>setOldPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-2" controlId="loginform.email">
                <Form.Control type="password" placeholder="New Password"   onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>
            
            <Form.Group className="mb-2" controlId="loginform.email">
                <Form.Control type="password" placeholder="Confirm Password"  onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </Form.Group>
            
            <Button type="submit" className='btn-primary text-center h5  py-2 mt-3'>{props.buttonName}</Button>

        </Form>
    )
}
export default UerProfileEditForm;