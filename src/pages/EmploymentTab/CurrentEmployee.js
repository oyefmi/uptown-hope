import React, {useState} from "react";
import { Button } from "react-bootstrap";
import Timesheet from "../../components/Timesheet";
import './Employment.css'

const CurrentEmployee = () => {

    const [showTS, setShowTS] = useState(false);
    
    const showTimesheet = () => {
        setShowTS(true);
    }

    return (
        <div className="ce-employment">
            <div className="cover"></div>
                <div className="wrapper">
                    <div className="page-content">
                        <h2 id="title">Current Employees</h2>
                        <p>
                            <br />
                            List of forms for Contractors:
                            <br />
                            <ul>
                                <li></li>
                            </ul>
                        </p>
                        <Button 
                            variant="success" 
                            type="button" 
                            onClick={showTimesheet}>{ showTS ? <Timesheet /> : null } Fill Out Timesheet 
                        </Button>
                    </div>
            </div>
        </div>
    );
}

export default CurrentEmployee;