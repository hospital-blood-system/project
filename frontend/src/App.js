import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Dasboard from "./components/Dasboard";
import Login from "./components/Login";
import Register from './components/Register';
import Announcement from './components/Announcement';
import Donor from './components/Donor';
import Settings from './components/Settings';
import AdminControll from './components/AdminControll';
import Statistic from './components/Statistic';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Donor" element={<Donor />} />
        <Route path="/AdminControll" element={<AdminControll />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Statistic" element={<Statistic />} />
        <Route path="/Dasboard" element={<Dasboard />} /> {/* Dashboard'ı ekleyin */}
      </Routes>
    </Router>
  );
}

export default App;