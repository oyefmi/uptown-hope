import React from "react";
import './MainPage.css';

const Home = () => {
    return(
        <div className="main">
            <div className="top-block">
                <h1>Uptown Hope, LLC</h1>
                <p><em><strong>Positive Outlook, Open and Healthy Mind are the keys to success. 
                    <br/>Ability and Opportunity begins with Availability</strong></em>
                </p>
                <div className="wrapper symbol">
                    <div className="block">
                        <span>&#9774;</span>
                        <h3>Holistic</h3>
                        <p style={{paddingLeft: "25px"}}>approach to quality service provision</p>
                    </div>
                    <div className="block">
                        <span>&#9728;</span>
                        <h3>Opportunity</h3> 
                        <p>for clients to effectively fill any staffing vacancies</p>
                    </div>
                    <div className="block">
                        <span>&#10710;</span>
                        <h3>Preparation</h3>
                        <p>in order to always achieve a positive outcome</p>
                    </div>
                    <div className="block">
                        <span>&#10048;</span>
                        <h3>Empowerment</h3>
                        <p>and assistance blah blah blah blah blah blah</p>
                    </div>
                </div>
            </div>
            <div className="cover"></div>
                <div className="info">
                    <p style={{padding: "1em", backgroundColor: "white", textAlign: "center"}}>Uptown Hope (UH) is a limited liability 
                            company organized under the Laws of the State of Maryland. 
                            We offer Health Care staff for a wide variety of positions
                            <br />
                            For a full list of positions we fill, see the Services page.
                    </p>
                </div>
            <div>
                
            </div>
        </div>
    );
}

export default Home;