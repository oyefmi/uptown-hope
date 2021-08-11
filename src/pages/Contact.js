import React from "react";
import { Container, Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import Map from '../components/Map/Map';
import './MainPage.css';

const location = {
    address: 'Uptown Hope',
    lat: 39.4253,
    lng: -76.8113
  }

const Contact = () => {
    return(
        <div className="contact">
            <div className="wrapper">
                <div className="page-content">
                    <Map location={location} zoomLevel={17}/>
                    <h2 id="title">Contact Us</h2>
                    <div className="contact_info">
                        <div className="uptown_hope">
                            <p style={{color: "rgba(230, 115, 14, 1)", fontWeight: "700"}}>Uptown Hope, LLC</p>
                            <p>300 Redland Court, Suite 200 
                                <br/>Owings Mills, MD 21117</p>
                            <p>410-363-9495 (moblie)</p>
                            <p>443-326-5069 (cell)</p>
                            <p>410-363-9498 (fax)</p>
                            <a href = "mailto: uptownhopellc@gmail.com">uptownhopellc@gmail.com</a>
                            <br/><a href = "mailto: info@uptownhope.com">info@uptownhope.com</a>
                            <br/><a>www.uptownhope.com</a>
                        </div>
                        <Container>
                            <Form>
                                <FormGroup>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl required="true" type="text" placeholder="Name *"></FormControl>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl type="text" placeholder="Email *"></FormControl>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl type="text" placeholder="Phone Number *"></FormControl>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl type="text" placeholder="Subject"></FormControl>
                                </FormGroup>
                            </Form>
                            <div className="contact_button">
                                <Button className="float-end" variant="outline-secondary">Send</Button>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;