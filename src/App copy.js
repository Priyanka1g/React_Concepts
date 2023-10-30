import {BrowserRouter as Router,Switch,Route,Link,Routes} from "react-router-dom";
import React, { useState } from "react";
import FormData from "./components/FormData";
import FormTable from "./components/FormTable";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  // const [users, setUsers] = useState([]);
   const [users, setUsers] = useState([]);
  const handleAddTodo = (data) => {
    // Update the state with the received data from FormData component
    setUsers([...users, data])
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<FormData onAddItem={handleAddTodo}/>} />
          <Route path="/userdata" element={<FormTable users={users}/>} />
        </Routes>
      </Router>
    </div>
  )
}

