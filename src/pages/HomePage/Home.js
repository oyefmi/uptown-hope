import React from "react";
import './Home.css';

const Home = () => {
    return(
        <div className="main">
            <div className="top-block">
                <h1>Uptown Hope, LLC</h1>
                <p><em><strong>Positive Outlook, Open and Healthy Mind are the keys to success. 
                    <br/>Ability and Opportunity begins with Availability</strong></em>
                </p>
                <div className="wrapper-symbols">
                    <div className="symbol-block">
                        <span>&#9774;</span>

                        <h3>Holistic</h3>
                        <p>approach to quality service provision</p>
                    </div>
                    <div className="symbol-block">
                        <span>&#9728;</span>
                        <h3>Opportunity</h3> 
                        <p>for clients to effectively fill any staffing vacancies</p>
                    </div>
                    <div className="symbol-block">
                        <span>&#10710;</span>
                        <h3>Preparation</h3>
                        <p>in order to always achieve a positive outcome</p>
                    </div>
                    <div className="symbol-block">
                        <span>&#10048;</span>
                        <h3>Empowerment</h3>
                        <p>and assistance</p>
                    </div>
                </div>
            </div>
            <div className="cover"></div>
                <div className="info">
                    <div className="info-image">
                        <img src="../images/sunshine.jpg" alt="Random" style={{width: "700px", height: "500px"}} />
                    </div>
                    <p className="info-text">
                        300 Redland Ct Suite 200 <br />
                        Owings Mills, MD 21133 <br />
                        (410) 363-9495 <br />
                        uptownhopellc@gmail.com
                        <br /><br />
                    </p>
                </div>
                <p className="info-bottom">
                    Uptown Hope (UH) is a limited liability 
                    company organized under the Laws of the State of Maryland. 
                    We offer Health Care staff for a wide variety of positions
                    <br /><br />
                    For a full list of positions we fill, see the Services page.
                </p>
            <div>
                
            </div>
        </div>
    );
}

export default Home;