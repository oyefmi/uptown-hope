import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './MainNav.css';

const MainNav = () => {
    return(
        <Navbar collapseOnSelect bg="light" expand="xxl">
            <Navbar.Brand href="/">
                <div className="nav-logo">
                    <img
                        src="../images/uptownhope_logo.jpeg"
                        alt="Uptown Hope logo" 
                        width="100"
                        height="60"
                    />
                </div>
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
                        <Nav.Link>Career Opportunities</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/staffing-solutions">
                        <Nav.Link>Staffing Solutions</Nav.Link>
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




