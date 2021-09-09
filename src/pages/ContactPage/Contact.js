import React, { useState } from "react";
import axios from 'axios';
import { Container, Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import Map from '../../components/Map/Map';
import './Contact.css';


const Contact = () => {
    const location = {
        address: 'Uptown Hope',
        lat: 39.4253,
        lng: -76.8113
    }
    const [validated, setValidated] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        description: ""
    })
    
    

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        axios({
            method: "POST",
            url: "http://localhost:3000/contact",
            data: contactInfo
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Messege Sent.");
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })

        console.log(contactInfo);
    }

    return(
        <div className="contact">
            <div className="wrapper">
                <div className="page-content">
                    <Map location={location} zoomLevel={15}/>
                    <h2 id="title">Contact Us</h2>
                    <div className="contact_info">
                        <div className="uptown-hope">
                            <p style={{color: "rgba(230, 115, 14, 1)", fontWeight: "750"}}>Uptown Hope, LLC</p>
                            <p>300 Redland Court, Suite 200 
                            <br/>Owings Mills, MD 21117</p>
                            <p>410-363-9495 (moblie)</p>
                            <p>443-326-5069 (cell)</p>
                            <p>410-363-9498 (fax)</p>
                            <a href = "mailto: info.uptownhope@gmail.com">info.uptownhope@gmail.com</a>
                        </div>
                        <Container>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <FormGroup>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl 
                                        required 
                                        type="text" 
                                        placeholder="Name *" 
                                        onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}>
                                    </FormControl>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid name.
                                    </Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl 
                                        required 
                                        type="email" 
                                        placeholder="Email *"
                                        onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}>                                            
                                    </FormControl>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email address
                                    </Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl 
                                        required 
                                        type="text" 
                                        placeholder="xxxxxxxxxx" 
                                        maxLength="10"
                                        onChange={(e) => setContactInfo({...contactInfo, phoneNumber: e.target.value})}>
                                    </FormControl>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a 10 digit phone number.
                                    </Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl 
                                        required
                                        as="textarea" 
                                        rows={4} 
                                        placeholder="Message" 
                                        onChange={(e) => setContactInfo({...contactInfo, description: e.target.value})}>                                            
                                    </FormControl>
                                    <Form.Control.Feedback type="invalid">
                                        Give a short description of your need.
                                    </Form.Control.Feedback>
                                </FormGroup>
                                <div className="contact_button">
                                    <Button className="float-end" variant="outline-secondary" type="submit">Send</Button>
                                </div>
                            </Form>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;