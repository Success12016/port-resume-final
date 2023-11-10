import React from "react";
import './App.css';
import Navbar from './components/navbar'

import Home from './contents/Home'

import { BrowserRouter as Router, Route,Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
