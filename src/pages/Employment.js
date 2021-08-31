import React from "react";
import { Card, Button } from 'react-bootstrap';

const Employment = () => {
    return(
        <div className="employment">
            <div className="cover"></div>
            <div className="wrapper">
                <div className="page-content">
                    <h2 id="title">How to Apply</h2>
                    <div className="job-info">
                        <p>Anyone interested in employment with Uptown Hope should send an email to ____________.
                            Additionally, if you would like to send your resume as well, 
                            it is appreciated but not required.</p>
                        <div className="cards-row">
                            <Card style={{ width: '21rem' }}>
                                <Card.Img variant="top" alt='Corporate Card' src='../images/corporate1.jpg' />
                                <Card.Body>
                                    <Card.Title>Businesses</Card.Title>
                                    <Card.Text>
                                        Is your business short on staff? 
                                        Are you looking for staff to help jumpstart a new business venture? 
                                        Or are you just looking to shake things up in an unconventional way?
                                        Whatever your Health Care staffing need, Uptown Hope can help. Click below for infomation on how or how much!
                                    </Card.Text>
                                    <br />
                                    <Button variant="outline-secondary">Let Us Help</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '21rem' }}>
                                <Card.Img variant="top" alt='Contractor Card' src="../images/Hands_together_Diversity_hero.jpg" style={{height: "225px"}}/>
                                <Card.Body>
                                    <Card.Title>Contractors</Card.Title>
                                    <Card.Text>
                                        Being a contractor at Uptown Hope means access to some of the best positions in a variety of health care positions.
                                        If this is something you think may interest you, click the button below to find out how you can become a part of the Uptown Hope team!
                                    </Card.Text>
                                    <br />
                                    <Button variant="outline-secondary">Join the Team</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default Employment;