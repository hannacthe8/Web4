
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Specials from './Specials';
import Admin from './Admin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Happy Helpings</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/specials">Specials</Link> | <Link to="/admin">Admin</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
