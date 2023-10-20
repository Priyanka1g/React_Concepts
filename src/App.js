import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import React from "react";
import Home from "./component/Home";
import Welcome from "./component/Welcome";
import NavBar from "./component/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/welcome" element={<Welcome/>} />
        </Routes>
      </Router>
    </div>
  )
}
