import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import './Employment.css'

const Employment = () => {
    let history = useHistory();
    function handleClick() {
        history.push('/career-opportunities');
    };

    return(
        <div className="employment">
            <div className="cover"></div>
            <div className="wrapper">
                <div className="page-content">
                    <h2 id="title">Employment</h2>
                    <div className="job-info">
                        {/* <p>Anyone interested in employment with Uptown Hope should send an email to info@uptownhope.com.
                            Additionally, if you would like to send your resume as well, 
                            it is appreciated but not required.</p> */}
                        <div className="cards-row">
                            <div className="card-left">
                                <Card id="card">
                                    <Card.Img className="card-image-bus" variant="top" alt='Corporate Card' src='../images/corporate1.jpg' />
                                    <Card.Body>
                                        <Card.Title id="card-title">Businesses</Card.Title>
                                        <Card.Text id="card-text">
                                            Is your business short on staff? 
                                            Are you looking for staff to help jumpstart a new business venture? 
                                            Or are you just looking to shake things up in an unconventional way?
                                            Whatever your Health Care staffing need, Uptown Hope can help. 
                                            Send us an email, or fill out the fields on the contact page. {/* Click below for infomation on how or how much! */}
                                        </Card.Text>
                                        <br />
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="card-right">
                                <Card id="card">
                                    <Card.Img className="card-image-con" variant="top" alt='Contractor Card' src="../images/Hands_together_Diversity_hero.jpg"/>
                                    <Card.Body>
                                        <Card.Title id="card-title">Contractors</Card.Title>
                                        <Card.Text id="card-text">
                                            Being a contractor at Uptown Hope means access to some of the best positions in a variety of health care fields.
                                            If this is something you think may interest you, Email us, or fill out the fields on the contact page. 
                                            Including a pdf copy of your resume, if applicable, would be greatly appreciated.
                                        </Card.Text>
                                        <br />
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="button">
                            <Button variant="outline-secondary" onClick={handleClick}>Join the Team</Button>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default Employment;