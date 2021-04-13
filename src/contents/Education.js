import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.S. Computer Science" where="San Francisco State University" from="January 2018" to="December 2020"/>
            <Widecard title="A.A.S. Respiratory Therapy" where="Thomas Edison State College" from="2013" to="2014"/>
            </div>
            )
        }
    }
    
export default Education
    