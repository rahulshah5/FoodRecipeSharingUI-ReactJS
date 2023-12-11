import React, { useEffect, useState } from 'react';
import { Button, Nav, Form, Col,Offcanvas,Navbar,Row } from 'react-bootstrap';
import { NavLink, useNavigate,useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/navbar.css';
import AuthService from '../apiData/AuthService';
import axios from '../apiData/axios';
import UserData from '../apiData/UserData';


function NavbarLayout(props) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  
  
    const navigate = useNavigate();

    const handleSearch = async () => {
        
        
        try {
          const response = await axios.get('search/', {
              query:searchQuery
          });
        navigate('/search', { state:{res:response.data},
          });
        } catch (error) {
            // Handle error
            console.error('Error searching:', error);
        }
    };

    const [isLoggedIn,setLoggedIn]=useState(false)
    const toggleOffcanvas = () => {
      setShowOffcanvas(!showOffcanvas);
  };
    

    const logoutUser = async () => {
      await AuthService.logout();
      window.location.reload()
    }
  const [selectedCountry, setSelectedCountry] = useState('');
  const handleCountryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCountry(selectedValue);
    localStorage.setItem('country', JSON.stringify(selectedValue));
    window.location.reload()
  };


  const setDefaultCountry = () => {
    const defaultCountry = 'nepal'; 
    localStorage.setItem('country', JSON.stringify(defaultCountry));
    setSelectedCountry(defaultCountry);
  };
  useEffect(() => {
    const storedCountry = localStorage.getItem('country');
    if (!storedCountry) {
      setDefaultCountry(); 
    } else {
      setSelectedCountry(JSON.parse(storedCountry)); 
    }

    if (localStorage.getItem('user')) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="mt-4  ">
      <Row className="mb-2">
      <Col className="d-flex justify-content-end">
        <Form.Group className="country-width">
          <Form.Select
            size="sm"
            aria-label="country"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="nepal">Nepal</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
            <option value="all" defaultChecked>All</option>
          </Form.Select>
        </Form.Group>
      </Col>
    </Row>
      {/* links */}
      
        <Row className='mb-3'>
            <Col lg={4} md={4} sm={6} xs={6}>
                <h2>Food Recipe Sharing Site</h2>
            </Col>
            <Col className='d-flex align-items-center justify-content-end'>
                <Nav variant="pills" className="  navbarResponsive " id="navbarNav">
                    <NavLink  to="/#" className="text-decoration-none mx-3 py-2 navbutton" >Home</NavLink>
                      <NavLink to="/all-recipes" className="text-decoration-none mx-3 py-2 navbutton">  All Recipes</NavLink>
                      {/* <NavLink to="/recipe" className="text-decoration-none mx-3 py-2 navbutton">  Recipe</NavLink> */}
                      {isLoggedIn ?<>
                        <NavLink  to="/post-recipe"  className="text-decoration-none mx-3 py-2 navbutton">  Add Recipe</NavLink>
                          <NavLink to="/profile" className="text-decoration-none mx-3 py-2 navbutton">  Profile</NavLink>
                          <NavLink onClick={logoutUser} to="/#" className="text-decoration-none mx-3 py-2 navbutton">Logout</NavLink></>:
                          <NavLink to="/login" className="text-decoration-none mx-3 py-2 navbutton">  Login</NavLink>
                      }
                </Nav>

{/* off canvas menu for small devices */}
                <Button variant="outline-primary" onClick={toggleOffcanvas} id="offcanvasNavbar" className='float-end '><FontAwesomeIcon icon={faBars}/></Button>
                <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="flex-column">
                              <NavLink to="/#" className="text-decoration-none mx-3 py-2 navbutton" >Home</NavLink>
                              
                            <NavLink  to="/recipe"  className="text-decoration-none mx-3 py-2 navbutton">  Recipe</NavLink>
                              <NavLink to="/category" className="text-decoration-none mx-3 py-2 navbutton" >  All Recipes</NavLink>
                              {isLoggedIn ? <>
                                <NavLink to="/profile" className="text-decoration-none mx-3 py-2 navbutton">  Profile</NavLink>
                                <NavLink to="/post-recipe" className="text-decoration-none mx-3 py-2 navbutton">  Add Recipe</NavLink> 
                                <NavLink to="/#" onClick={logoutUser} className="text-decoration-none mx-3 py-2 navbutton">Logout</NavLink></>:
                                <NavLink to="/login" className="text-decoration-none mx-3 py-2 navbutton">  Login</NavLink>
                              }
                              
                              
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Col>
        </Row>
                    
      {/* search bar */}
      {/* <Row>
        <Col lg={12} >
            
            <Form onSubmit={handleSearch} className="d-flex px-5 float-end searchBar">
                <Form.Control
                    size="sm"
                    type="search"
                    aria-label="search"
                    className="me-2 px-4 rounded-pill"
                    placeholder="Search Recipe"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" size="sm">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </Form>
        </Col>
      </Row> */}
    </div>
  );
}

export default NavbarLayout;
