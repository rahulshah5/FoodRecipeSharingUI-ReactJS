import {React,useState} from 'react'
import MasterLayout from '../layout/MasterLayout';
import {Form,Col, Button, ToggleButton,ToggleButtonGroup} from 'react-bootstrap'
import chefImage from '../../assets/images/chef.jpg'
import '../../assets/css/body.css'
import { useNavigate } from "react-router-dom";
import AuthService from '../apiData/AuthService'
import ToastMessage from './fragments/toast_message';
import '../../assets/css/login.css'
function LoginUser(props){
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [fullname, setFullname] = useState("");
    const [useremail, setUserEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [country, setCountry] = useState("");
    const [gender, setGender] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
  
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const navigate = useNavigate();
  
    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
        
    };

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const user = await AuthService.login(useremail, pass);
        setToastMessage("Logged in succesfully!")
        setShowToast(true)
        navigate('/home')
      } catch (error) {
        setToastMessage("Username or Password doesn't match");
        setShowToast(true)
        setEmailError(true); 
        setPasswordError(true); 
      }
    };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (pass !== confirmPass) {
      setToastMessage("password and confirm password doesn't match")  
      setShowToast(true)
      return;
      }
        
        try {
          const user = await AuthService.register(
            fullname,
            useremail,
            gender,
            pass,
            confirmPass,
            country
            );
          await AuthService.login(useremail, pass)
          setToastMessage("Registered Successfully!")
          setShowToast(true)
            navigate('/home')
            console.log(user)
        } catch (error) {
          console.error("Registration failed:");
          setToastMessage(error)
          setShowToast(true)
        }
    };
    return (
      <MasterLayout>
        <ToastMessage show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />
        <div className="d-flex  responsiveness marginTop ">
          <Col lg={7} sm={12} xs={12} id="imageHide">
            <img
              src={chefImage}
              height="auto"
              width="100%"
              alt="chef vector"
              id="loginPageImage"
              className="px-5"
            />
          </Col>
          {showLoginForm ? (
            <Col lg={4} sm={12} xs={12} className="h-100 p-3 ">
              <ToggleButtonGroup
                name="switch"
                type="radio"
                defaultValue={[1]}
                className="mb-2 d-flex justify-content-center"
              >
                <ToggleButton className="h6" value="1">
                  Login
                </ToggleButton>
                <ToggleButton
                  onClick={toggleForm}
                  variant="none"
                  className="h6"
                  value="2"
                >
                  Register
                </ToggleButton>
              </ToggleButtonGroup>
              <p className="mt-4  h5 ">Login</p>
              <Form
                className="mt-4 d-flex flex-wrap flex-column justify-content-center"
                onSubmit={handleLogin}
              >
                <Form.Group className="mb-2" controlId="loginform.email">
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    value={useremail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className={emailError ? 'error-border' : ''}
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="loginform.password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={pass}
                    onChange={(e) => setPassword(e.target.value)}
                    className={passwordError ? 'error-border' : ''}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="btn-primary text-center h5  py-2 mt-3"
                >
                  Login
                </Button>
              </Form>
            </Col>
          ) : (
            <Col lg={4} sm={12} xs={12} className="h-100 p-3  ">
              <ToggleButtonGroup
                name="switch"
                type="radio"
                defaultValue={[2]}
                className="mb-2 d-flex justify-content-center"
              >
                <ToggleButton
                  onClick={toggleForm}
                  variant="none"
                  className="h6"
                  value="1"
                >
                  Login
                </ToggleButton>
                <ToggleButton className="h6" value="2">
                  Register
                </ToggleButton>
              </ToggleButtonGroup>
              <p className="mt-4  h5">Register</p>
              <Form
                className="mt-4 d-flex flex-wrap flex-column justify-content-center"
                onSubmit={handleRegister}
              >
                <Form.Group className="mb-2" controlId="loginform.email">
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      required
                  />
                </Form.Group>

                <Form.Group className="mb-2" controlId="loginform.email">
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    value={useremail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                  />
                </Form.Group>

                <Form.Group className="mb-2" controlId="loginform.password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={pass}
                      onChange={(e) => setPassword(e.target.value)}
                      pattern="^(?=.*[A-Z])(?=.*\d).{8,}$"
                      required
                  />
                </Form.Group>

                <Form.Group className="mb-2" controlId="loginform.password2">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    pattern="^(?=.*[A-Z])(?=.*\d).{8,}$"
                    
                    required
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                      Password and Confirm Password must contain at least one uppercase letter, one number, and be at least 8 characters long
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-2" controlId="loginform.gender">
                  <Form.Select
                    aria-label="Gender"
                    value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                  >
                    <option>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-2" controlId="loginform.country">
                  <Form.Select
                    aria-label="Country"
                    value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                  >
                    <option>Select Country</option>
                    <option value="Nepal">Nepal</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Button
                  type="submit"
                  className="btn-primary text-center h5  py-2 mt-3"
                >
                  Register
                </Button>
              </Form>
            </Col>
          )}
        </div>
      </MasterLayout>
    );
}

export default LoginUser;