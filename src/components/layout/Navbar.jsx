import React, { useState } from 'react';
import { Button, Nav, Form, Col, Collapse,Offcanvas,Navbar,Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/navbar.css';


//   return (
//     <>
//       <Navbar bg="light" expand="lg">
//         <Container>
//           <Navbar.Brand href="#">Logo</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbar-nav" />
//           <Navbar.Collapse id="navbar-nav">
//             <Nav variant="pills" className="d-flex justify-content-around navbarResponsive" id="navbarNav">
                //     <NavLink  to="/#" className="text-decoration-none px-3 py-2 navbutton" >Home</NavLink>
                //     <NavLink  to="/login"  className="text-decoration-none px-3 py-2 navbutton">  Login</NavLink>
                //     <NavLink  to="/profile"  className="text-decoration-none px-3 py-2 navbutton">  Profile</NavLink>
                //     <NavLink  to="/post-recipe"  className="text-decoration-none px-3 py-2 navbutton">  Add Recipe</NavLink>
                //     <NavLink  to="/recipe"  className="text-decoration-none px-3 py-2 navbutton">  Recipe</NavLink>
                //     <NavLink  to="/category"  className="text-decoration-none px-3 py-2 navbutton">  Category</NavLink>
                // </Nav>
//             <Button variant="outline-primary" onClick={toggleOffcanvas}>
//               Menu
//             </Button>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>


//     </>
//   );
// }

// export default App;


function NavbarLayout(props) {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const toggleOffcanvas = () => {
      setShowOffcanvas(!showOffcanvas);
    };
  return (
    <div className="mt-4">
      {/* links */}
        <Navbar expand="lg">
            <Col lg={4} md={4} sm={6} xs={6}>
                <h2>Cookiee</h2>
            </Col>
            <Col className='d-flex align-items-center justify-content-end'>
                <Nav variant="pills" className="  navbarResponsive " id="navbarNav">
                    <NavLink  to="/#" className="text-decoration-none px-3 py-2 navbutton" >Home</NavLink>
                    <NavLink  to="/login"  className="text-decoration-none px-3 py-2 navbutton">  Login</NavLink>
                    <NavLink  to="/profile"  className="text-decoration-none px-3 py-2 navbutton">  Profile</NavLink>
                    <NavLink  to="/post-recipe"  className="text-decoration-none px-3 py-2 navbutton">  Add Recipe</NavLink>
                    <NavLink  to="/recipe"  className="text-decoration-none px-3 py-2 navbutton">  Recipe</NavLink>
                    <NavLink  to="/category"  className="text-decoration-none px-3 py-2 navbutton">  Category</NavLink>
                </Nav>

{/* off canvas menu for small devices */}
                <Button variant="outline-primary" onClick={toggleOffcanvas} id="offcanvasNavbar" className='float-end '><FontAwesomeIcon icon={faBars}/></Button>
                <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="flex-column">
                            <NavLink  to="/#" className="text-decoration-none px-3 py-2 navbutton" >Home</NavLink>
                            <NavLink  to="/login"  className="text-decoration-none px-3 py-2 navbutton">  Login</NavLink>
                            <NavLink  to="/profile"  className="text-decoration-none px-3 py-2 navbutton">  Profile</NavLink>
                            <NavLink  to="/post-recipe"  className="text-decoration-none px-3 py-2 navbutton">  Add Recipe</NavLink>
                            <NavLink  to="/recipe"  className="text-decoration-none px-3 py-2 navbutton">  Recipe</NavLink>
                            <NavLink  to="/category"  className="text-decoration-none px-3 py-2 navbutton">  Category</NavLink>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Col>
        </Navbar>
                       
    {/* search bar */}
        <Col lg={12} >
            <Form className="d-flex justify-content-end px-5 float-end searchBar">
                <Form.Control size="sm" type="search" aria-label="search" className="me-2 px-4 rounded-pill" placeholder="Search Recipe"/>
                <Button type="submit" size="sm">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </Form>
        </Col>
      
    </div>
  );
}

export default NavbarLayout;
