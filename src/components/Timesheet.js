import React from 'react';
import { Container, Form, Row, FormLabel, FormControl, Col } from 'react-bootstrap';
import './Timesheet.css'

const Timesheet = () => {

    return(
        <Container>
            <Form>
                <Row>
                    <FormLabel>Name</FormLabel>
                    <FormControl 
                        type="text" 
                        placeholder="*Full Name" />
                </Row>
                <Row>
                    <FormLabel>Unit</FormLabel>
                    <FormControl 
                        type="text" 
                        placeholder="Unit" />
                </Row>
                <br />
                <Container className="weeks">
                    <Form.Group as={Row} className="week-one">
                        <Row>
                            <Form.Label column>Week 1</Form.Label>
                        </Row>
                        <Form.Label column>
                            Sun
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col><br />
                        <Form.Label column>
                            Mon
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col><br />
                        <Form.Label column>
                            Tues
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col><br />
                        <Form.Label column>
                            Wed
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col><br />
                        <Form.Label column>
                            Thurs
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col><br />
                        <Form.Label column>
                            Fri
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col><br />
                        <Form.Label column>
                            Sat
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="week-two">
                        <Row>
                            <Form.Label column>Week 2</Form.Label>
                        </Row>
                        <Form.Label column>
                            Sun
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col><br />
                        <Form.Label column>
                            Mon
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col><br />
                        <Form.Label column>
                            Tues
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col><br />
                        <Form.Label column>
                            Wed
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col><br />
                        <Form.Label column>
                            Thurs
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col><br />
                        <Form.Label column>
                            Fri
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col><br />
                        <Form.Label column>
                            Sat
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Start" /> to
                            <Form.Control type="text" placeholder="End" />
                        </Col>
                    </Form.Group>
                </Container>
            </Form>
        </Container>
    );
}

export default Timesheet;