import React from 'react';
import { Container, Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {

    const schema = Yup.object().shape({
        name: Yup.string().min(2).max(30).required("Please provide a valid name."),
        email: Yup.string().max(50).required("Email address is Invalid."),
        phoneNumber: Yup.string(),
        description: Yup.string(),
    });

    return (
        <Formik 
            validationSchema={schema} 
            initialValues={{
                name: "",
                email: "",
                phoneNumber: "",
                description: ""}}>
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormControl 
                            value={values.name}
                            name="name"
                            type="text" 
                            placeholder="Name *" 
                            onChange={handleChange}>
                        </FormControl>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid name.
                        </Form.Control.Feedback>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl 
                            value={values.email}
                            type="email" 
                            placeholder="Email *"
                            onChange={handleChange}>                                            
                        </FormControl>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email address
                        </Form.Control.Feedback>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl 
                            value={values.phoneNumber} 
                            type="text" 
                            placeholder="xxxxxxxxxx" 
                            maxLength="10"
                            onChange={handleChange}>
                        </FormControl>
                        <Form.Control.Feedback type="invalid">
                            Please provide a 10 digit phone number.
                        </Form.Control.Feedback>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Description</FormLabel>
                        <FormControl 
                            value={values.description}
                            as="textarea" 
                            rows={4} 
                            placeholder="Message" 
                            onChange={handleChange}>                                            
                        </FormControl>
                        <Form.Control.Feedback type="invalid">
                            Give a short description of your need.
                        </Form.Control.Feedback>
                    </FormGroup>
                    <div className="contact_button">
                        <Button className="float-end" variant="outline-secondary" type="submit">Send</Button>
                    </div>
                </Form>
        </Formik>
    )
}

export default ContactForm;
