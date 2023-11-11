import React, {Component} from 'react'

class About extends Component {
    render() {
        return(
            <div className='condiv about'>
                <h1 className="subtopic">About Me</h1>
                <img src="https://i.imgur.com/da7coxW.jpg" alt="profile" className="ProfilePic"/>
                <h3>Hi, I'm Pattarachai Yaisoong</h3>
                <p>
                    I'm a College of Industrial Technology student at King Mongkut's University of Technology North Bangkok 
                </p>
            </div>
        );
    }
}

export default About;