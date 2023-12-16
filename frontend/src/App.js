import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Dasboard from "./components/Dasboard";
import Login from "./components/Login";
import Register from './components/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dasboard" element={<Dasboard />} /> {/* Dashboard'ı ekleyin */}
      </Routes>
    </Router>
  );
}

export default App;