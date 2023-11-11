import React from "react";
import './App.css';
import Navbar from './components/navbar'

import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Skills from './contents/Skills'
import Contact from './contents/Contact'

import { BrowserRouter as Router, Route,Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/education" element={<Education />}/>
          <Route exact path="/skills" element={<Skills />}/>
          <Route exact path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
