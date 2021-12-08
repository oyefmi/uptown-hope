import React from 'react';
import { Container, Form, Row, FormLabel, Col, Button } from 'react-bootstrap';
import './Timesheet.css'

const Timesheet = () => {

    return(
        <Container>
            <Form>
                <Row>
                    <FormLabel>Name</FormLabel>
                    <Form.Control 
                        type="text" 
                        placeholder="*Full Name" />
                </Row>
                <Row>
                    <FormLabel>Unit</FormLabel>
                    <Form.Control 
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
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                        </Col><br />
                        <Form.Label column>
                            Mon
                        </Form.Label>
                        <Col>
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                        </Col><br />
                        <Form.Label column>
                            Tues
                        </Form.Label>
                        <Col>
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                        </Col><br />
                        <Form.Label column>
                            Wed
                        </Form.Label>
                        <Col>
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                        </Col><br />
                        <Form.Label column>
                            Thurs
                        </Form.Label>
                        <Col>
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                        </Col><br />
                        <Form.Label column>
                            Fri
                        </Form.Label>
                        <Col>
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                        </Col><br />
                        <Form.Label column>
                            Sat
                        </Form.Label>
                        <Col>
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
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
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                        </Col><br />
                        <Form.Label column>
                            Mon
                        </Form.Label>
                        <Col>
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                        </Col><br />
                        <Form.Label column>
                            Tues
                        </Form.Label>
                        <Col>
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                        </Col><br />
                        <Form.Label column>
                            Wed
                        </Form.Label>
                        <Col>
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                        </Col><br />
                        <Form.Label column>
                            Thurs
                        </Form.Label>
                        <Col>
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                        </Col><br />
                        <Form.Label column>
                            Fri
                        </Form.Label>
                        <Col>
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                        </Col><br />
                        <Form.Label column>
                            Sat
                        </Form.Label>
                        <Col>
                            <div className='time'>
                                <Form.Control type="text" placeholder="Start" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                            to
                            <div className='time'>
                                <Form.Control type="text" placeholder="End" />
                                <Form.Control as="select" className="tod">
                                    <option>am</option>
                                    <option>pm</option>
                                </Form.Control>
                            </div>
                        </Col>
                    </Form.Group>
                </Container>
            </Form>
            <br />
            <Button className="float-end" variant="outline-secondary">Save Draft</Button>
            <Button className="float-end" variant="outline-secondary">Submit</Button>
        </Container>
    );
}

export default Timesheet;