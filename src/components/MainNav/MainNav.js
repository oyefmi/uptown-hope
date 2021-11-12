import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './MainNav.css';

const MainNav = () => {
    return(
        <Navbar collapseOnSelect bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img
                    src="../images/uptownhope_logo.jpeg"
                    alt="Uptown Hope logo" 
                    width="100"
                    height="60"
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
                    <NavDropdown title="Employment">
                        <LinkContainer to="/employment/prospective-employee">
                            <NavDropdown.Item>Prospective Employee</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/employment/current-employee">
                            <NavDropdown.Item>Current Employee</NavDropdown.Item>
                        </LinkContainer>        
                    </NavDropdown>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/faq">
                        <Nav.Link>FAQ</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainNav;




