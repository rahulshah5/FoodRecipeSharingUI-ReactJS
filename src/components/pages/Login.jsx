import {React,useState} from 'react'
import MasterLayout from '../layout/MasterLayout';
import {Form,Col, Button} from 'react-bootstrap'
import chefImage from '../../assets/images/chef.jpg'
import '../../assets/css/body.css'

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
            <div className='d-flex align-items-center mt-5'>   
                  
                <Col lg={7} sm className=''>
                        <img src={chefImage} height="auto" width="100%" alt='chef vector '/>
                </Col>    
                {showLoginForm?(
                
                    <Col lg={3} sm className='h-100 mt-5'>
                        <Button onClick={toggleForm} className=''>
                            {showLoginForm ? 'Switch to Registration' : 'Switch to Login'}
                        </Button>  
                        <p className='mt-2 pt-5 h4 '>Login</p>
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
                        
                    <Col lg={3} sm className='h-100 mt-5'>
                        <Button onClick={toggleForm}>
                            {showLoginForm ? 'Switch to Registration' : 'Switch to Login'}
                        </Button>  
                        <p className='mt-2 pt-5 h4'>Register</p>
                        <Form className='mt-4 d-flex flex-wrap flex-column justify-content-center'>
                            
                            <Form.Group className="mb-2" controlId="loginform.email">
                                <Form.Control type="text" placeholder="Full Name"/>
                            </Form.Group>


                            <Form.Group className="mb-2" controlId="loginform.email">
                                <Form.Control type="email" placeholder="Email address"/>
                            </Form.Group>
                            
                            <Form.Group className="mb-2" controlId="loginform.password">
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="loginform.password2">
                                <Form.Control type="password" placeholder="Confirm Password"/>
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="loginform.gender">
                                <Form.Select aria-label="Gender">
                                    <option>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Femlae</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Form.Group>

                            <Button type="submit" className='btn-primary text-center h5  py-2 mt-3'>Login</Button>
                        </Form>
                    </Col>
                    )}
            </div>
        </MasterLayout>
    )
}

export default LoginUser;