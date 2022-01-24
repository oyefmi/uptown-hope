import React from 'react';
import { Container, Form, Row, FormLabel, Col, Button } from 'react-bootstrap';
import './Timesheet.css';
import { Formik, getIn } from 'formik';
import * as Yup from 'yup';

const Timesheet = () => {

    const schema = Yup.object().shape({
        name: Yup.string().min(2).max(30).required("Name is required"),
        unit: Yup.string().min(2).max(30).required("Please enter unit name"),
        wk1_sun: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        }),
        wk1_mon: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        }),
        wk1_tue: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        }),
        wk1_wed: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        }),
        wk1_thu: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        }),
        wk1_fri: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        }),
        wk1_sat: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        }),
        wk2_sun: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        }),
        wk2_mon: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        }),
        wk2_tue: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        }),
        wk2_wed: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        }),
        wk2_thu: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        }),
        wk2_fri: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        }),
        wk2_sat: Yup.object().shape({
            start: Yup.number().positive().integer().min(1).max(12),
            end: Yup.number().positive().integer().min(1).max(12)
        })
    })

    return(
        <Formik
            initialValues={{
                name: "",
                unit: "",
                wk1_sun: {
                    start: "",
                    end: ""
                },
                wk1_mon: {
                    start: "",
                    end:""
                },
                wk1_tue: {
                    start: "",
                    end: ""
                },
                wk1_wed: {
                    start: "",
                    end: ""
                },
                wk1_thu: {
                    start: "",
                    end: ""
                },
                wk1_fri: {
                    start: "",
                    end: ""
                },
                wk1_sat: {
                    start: "",
                    end: ""
                }, 
                wk2_sun: {
                    start: "",
                    end: ""
                },
                wk2_mon: {
                    start: "",
                    end:""
                },
                wk2_tue: {
                    start: "",
                    end: ""
                },
                wk2_wed: {
                    start: "",
                    end: ""
                },
                wk2_thu: {
                    start: "",
                    end: ""
                },
                wk2_fri: {
                    start: "",
                    end: ""
                },
                wk2_sat: {
                    start: "",
                    end: ""
                }
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={schema}>
            {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    errors,
                }) => (
                    <Container>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row>
                            <FormLabel>Name</FormLabel>
                            <Form.Control 
                                value={values.name}
                                name="name"
                                type="text" 
                                placeholder="Full Name" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.name && errors.name}/>
                        </Row>
                        <Row>
                            <FormLabel>Unit</FormLabel>
                            <Form.Control 
                                value={values.unit}
                                name="unit"
                                type="text" 
                                placeholder="Unit" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.unit && errors.unit}/>
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
                                        <Form.Control
                                            value={values.wk1_sun.start}
                                            name='wk1_sun.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_sun.start') && getIn(errors, 'wk1_sun.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control
                                            value={values.wk1_sun.end} 
                                            name='wk1_sun.end'
                                            type="text" 
                                            placeholder="End"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_sun.end') && getIn(errors, 'wk1_sun.end')}/>
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
                                        <Form.Control 
                                            value={values.wk1_mon.start}
                                            name='wk1_mon.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_mon.start') && getIn(errors, 'wk1_mon.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control 
                                            value={values.wk1_mon.end}
                                            name='wk1_mon.end'
                                            type="text" 
                                            placeholder="End" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_mon.end') && getIn(errors, 'wk1_mon.end')}/>
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
                                        <Form.Control 
                                            value={values.wk1_tue.start}
                                            name='wk1_tue.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_tue.start') && getIn(errors, 'wk1_tue.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control 
                                            value={values.wk1_tue.end}
                                            name='wk1_tue.end'
                                            type="text" 
                                            placeholder="End" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_tue.end') && getIn(errors, 'wk1_tue.end')}/>
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
                                        <Form.Control 
                                            value={values.wk1_wed.start}
                                            name='wk1_wed.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_wed.start') && getIn(errors, 'wk1_wed.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control 
                                            value={values.wk1_wed.end}
                                            name='wk1_wed.end'
                                            type="text" 
                                            placeholder="End" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_wed.end') && getIn(errors, 'wk1_wed.end')}/>
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
                                        <Form.Control 
                                            value={values.wk1_thu.start}
                                            name='wk1_thu.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_thu.start') && getIn(errors, 'wk1_thu.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control 
                                            value={values.wk1_thu.end}
                                            name='wk1_thu.end'
                                            type="text" 
                                            placeholder="End" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_thu.end') && getIn(errors, 'wk1_thu.end')}/>
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
                                        <Form.Control 
                                            value={values.wk1_fri.start}
                                            name='wk1_fri.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_fri.start') && getIn(errors, 'wk1_fri.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control 
                                            value={values.wk1_fri.end}
                                            name='wk1_fri.end'
                                            type="text" 
                                            placeholder="End" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_fri.end') && getIn(errors, 'wk1_fri.end')}/>
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
                                        <Form.Control 
                                            value={values.wk1_sat.start}
                                            name='wk1_sat.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_sat.start') && getIn(errors, 'wk1_sat.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control 
                                            value={values.wk1_sat.end}
                                            name='wk1_sat.end'
                                            type="text" 
                                            placeholder="End" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk1_sat.end') && getIn(errors, 'wk1_sat.end')}/>
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
                                        <Form.Control 
                                            value={values.wk2_sun.start}
                                            name='wk2_sun.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_sun.start') && getIn(errors, 'wk2_sun.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control 
                                            value={values.wk2_sun.end}
                                            name='wk2_sun.end'
                                            type="text" 
                                            placeholder="End" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_sun.end') && getIn(errors, 'wk2_sun.end')}/>
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
                                        <Form.Control t
                                            value={values.wk2_mon.start}
                                            name='wk2_mon.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_mon.start') && getIn(errors, 'wk2_mon.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control 
                                            value={values.wk2_mon.end}
                                            name='wk2_mon.end'
                                            type="text" 
                                            placeholder="End" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_mon.end') && getIn(errors, 'wk2_mon.end')}/>
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
                                        <Form.Control 
                                            value={values.wk2_tue.start}
                                            name='wk2_tue.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_tue.start') && getIn(errors, 'wk2_tue.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control 
                                            value={values.wk2_tue.end}
                                            name='wk2_tue.end'
                                            type="text" 
                                            placeholder="End" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_tue.end') && getIn(errors, 'wk2_tue.end')}/>
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
                                        <Form.Control 
                                            value={values.wk2_wed.start}
                                            name='wk2_wed.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_wed.start') && getIn(errors, 'wk2_wed.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control 
                                            value={values.wk2_wed.end}
                                            name='wk2_wed.end'
                                            type="text" 
                                            placeholder="End" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_wed.end') && getIn(errors, 'wk2_wed.end')}/>
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
                                        <Form.Control 
                                            value={values.wk2_thu.start}
                                            name='wk2_thu.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_thu.start') && getIn(errors, 'wk2_thu.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control 
                                            value={values.wk2_thu.end}
                                            name='wk2_thu.end'
                                            type="text" 
                                            placeholder="End" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_thu.end') && getIn(errors, 'wk2_thu.end')}/>
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
                                        <Form.Control 
                                            value={values.wk2_fri.start}
                                            name='wk2_fri.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_fri.start') && getIn(errors, 'wk2_fri.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control 
                                            value={values.wk2_fri.end}
                                            name='wk2_fri.end'
                                            type="text" 
                                            placeholder="End" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_fri.end') && getIn(errors, 'wk2_fri.end')}/>
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
                                        <Form.Control 
                                            value={values.wk2_sat.start}
                                            name='wk2_sat.start'
                                            type="text" 
                                            placeholder="Start" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_sat.start') && getIn(errors, 'wk2_sat.start')}/>
                                        <Form.Control as="select" className="tod">
                                            <option>am</option>
                                            <option>pm</option>
                                        </Form.Control>
                                    </div>
                                    to
                                    <div className='time'>
                                        <Form.Control 
                                            value={values.wk2_sat.end}
                                            name='wk2_sat.end'
                                            type="text" 
                                            placeholder="End" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={getIn(touched, 'wk2_sat.end') && getIn(errors, 'wk2_sat.end')}/>
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
                        {/* <Button className="float-end" variant="outline-secondary">Save Draft</Button> */}
                        <Button className="float-end" variant="outline-secondary" type="submit">Submit</Button>
                    </Container>
                )}
        </Formik>
    );
}

export default Timesheet;