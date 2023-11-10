import React, {Component} from "react"
import Social from '../components/Social'
import ReactTypingEffect from "react-typing-effect";

class Home extends Component{
    render(){
        return(
            <div className="condiv home">
                <img src="https://i.imgur.com/da7coxW.jpg" alt="profile" className="ProfilePic"/>
                <ReactTypingEffect text={['I am Pattarachai Yaisoong', 'I am a Web Developer']  }speed={100} eraseDelay={1000} className="typingeffect"></ReactTypingEffect>
                <Social />
            </div>
        )
    }
}

export default Home;