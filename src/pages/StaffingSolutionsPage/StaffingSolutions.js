import React from "react";
import './StaffingSolutions.css';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const StaffingSolutions = () => {
    let history = useHistory();

    function handleClick() {
        history.push('/contact');
    }

    return(
        <div className="employment">
            <div className="cover"></div>
            <div className="wrapper">
                <div className="page-content">
                    <h2 id="title">Staffing</h2>
                    <div className="staff-1">
                        <p>Is your business short on staff? 
                            Are you looking for staff to help jumpstart a new business venture? 
                            Or are you just looking to shake things up in an unconventional way? 
                            Whatever your Health Care staffing need, Uptown Hope can help. 
                            Send us an email, or fill out the fields on the contact page.</p>
                        <div className="button">
                            <Button id="contact" variant="outline-secondary" onClick={handleClick}>Contact Us</Button>
                        </div>
                    </div>
                    <div className="staff-2">
                        <img className="image-bus" 
                            alt='Corporate Card' 
                            src='../images/corporate_staff.png'
                            height='290rem'
                            width='435rem'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffingSolutions;
