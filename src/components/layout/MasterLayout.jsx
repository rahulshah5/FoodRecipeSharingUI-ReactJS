import React from "react";
import NavbarLayout from "./Navbar";
import Footer from './Footer'
import { Container,Row } from "react-bootstrap";
import '../../assets/css/body.css'
import '../../assets/css/bootstrap.min.css'
const MasterLayout=({children})=>{
    return(
        <Container className="bodyBackground">
            <Row>
                <NavbarLayout/>
            </Row>
            <Row >
                {children}
            </Row>
            <Row>
                <Footer/>
            </Row>
            
        </Container>
    )
}

export default MasterLayout;