import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './MainNav.css';

const MainNav = () => {
    return(
        <Navbar collapseOnSelect bg="light" expand="xl">
            <Navbar.Brand href="#home">
                <img
                    src="../images/uptownhope_logo.jpeg"
                    width="100"
                    height="60"
                    paddingLeft="1"
                    className="d-inline-block align-top"
                    alt="Uptown Hope logo" 
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-center">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/services">
                        <Nav.Link>Services</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/employment">
                        <Nav.Link>Employment</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/faq">
                        <Nav.Link>FAQ</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainNav;




