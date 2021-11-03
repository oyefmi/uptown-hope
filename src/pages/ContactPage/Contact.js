import React from "react";
import Map from '../../components/Map/Map';
import './Contact.css';
import ContactForm from "../../components/ContactForm";


const Contact = () => {
    const location = {
        address: 'Uptown Hope',
        lat: 39.42452,
        lng: -76.81139
    }

    return(
        <div className="contact">
            <div className="wrapper">
                <div className="page-content">
                    <Map location={location} zoomLevel={17}/>
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
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;


