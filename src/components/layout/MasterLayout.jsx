import React from "react";
import NavbarLayout from "./Navbar";
import Footer from './Footer'
import { Container,Row } from "react-bootstrap";
const MasterLayout=({children})=>{
    return(
        <Container >
            <Row>
                <NavbarLayout/>
            </Row>
            <Row>
                {children}
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>
    )
}

export default MasterLayout;