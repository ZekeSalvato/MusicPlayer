import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, AllSongs, Home } from './components/Index'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AllSongs' element={<AllSongs />} />
      </Routes>
    </Router>
  );
}

export default App;