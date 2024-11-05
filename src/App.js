import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import IndexEs from './page/es/index-es';

function App() {

  return (
    <div className="App">
      <Router basename="/My-portafolio"> 
      <Routes>
        <Route path="/" element={<IndexEs />} />
        {/* <Route path="/dashboard" element={<IndexDashboard />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;