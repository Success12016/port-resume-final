import React, {Component} from 'react'
import Widecard from '../components/Widecard';

class Education extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="College of Industrial Technology" where="King Mongkut's University of Technology North Bangkok" from="2020" to="2023"></Widecard>
                <Widecard title="High School Diploma" where="Assumption Samutprakarn School" from="2008" to="2019"></Widecard>
            </div>
        )
    }
}

export default Education;