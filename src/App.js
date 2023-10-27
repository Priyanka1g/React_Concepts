import {BrowserRouter as Router,Switch,Route,Link,Routes} from "react-router-dom";
import React, { useState } from "react";
import FormData from "./components/FormData";
import FormTable from "./components/FormTable";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  // const [users, setUsers] = useState([]);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<FormData />} />
          <Route path="/data-table" element={<FormTable />} />
        </Routes>
      </Router>
    </div>
  )
}
