import {React,useState} from 'react'
import MasterLayout from '../layout/MasterLayout';
import {Form,Col, Button, ToggleButton,ToggleButtonGroup} from 'react-bootstrap'
import chefImage from '../../assets/images/chef.jpg'
import '../../assets/css/body.css'
import UserDetailsForm from './fragments/UserDetailsForm'
function LoginUser(props){
    const [showLoginForm, setShowLoginForm] = useState(true);

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Add your registration logic here
    };
    return(
        <MasterLayout>
            <div className='d-flex  responsiveness marginTop '>   
                  
                <Col lg={7} sm={12} xs={12} id='imageHide'>
                        <img src={chefImage} height="auto" width="100%" alt='chef vector' id='loginPageImage' className='px-5'/>
                </Col>    
                {showLoginForm?(
                
                    <Col lg={4} sm={12} xs={12} className='h-100 p-3 '>
                        <ToggleButtonGroup name='switch' type="radio" defaultValue={[1]} className='mb-2 d-flex justify-content-center'>
                            <ToggleButton  className='h6'  value='1'>
                                Login
                            </ToggleButton> 
                            <ToggleButton onClick={toggleForm} variant='none' className='h6' value='2'>
                                Register
                            </ToggleButton> 
                        </ToggleButtonGroup>
                        <p className='mt-4  h5 '>Login</p>
                        <Form className='mt-4 d-flex flex-wrap flex-column justify-content-center'>
                            <Form.Group className="mb-2" controlId="loginform.email">
                                <Form.Control type="email" placeholder="Email address"/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="loginform.password">
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <Button type="submit" className='btn-primary text-center h5  py-2 mt-3'>Login</Button>
                        </Form>
                        
                        
                    </Col>
                    ):(
                        
                    <Col lg={4} sm={12} xs={12} className='h-100 p-3  '>
                        <ToggleButtonGroup name='switch' type="radio" defaultValue={[2]} className='mb-2 d-flex justify-content-center'>
                            <ToggleButton onClick={toggleForm} variant='none' className='h6'  value='1'>
                                Login
                            </ToggleButton> 
                            <ToggleButton  className='h6' value='2'>
                                Register
                            </ToggleButton> 
                        </ToggleButtonGroup>
                        <p className='mt-4  h5'>Register</p>
                        <UserDetailsForm buttonName='Register'/>
                        
                    </Col>
                    )}
            </div>
        </MasterLayout>
    )
}

export default LoginUser;