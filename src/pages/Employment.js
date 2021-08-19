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
                            <Card style={{ width: '24rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '24rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
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