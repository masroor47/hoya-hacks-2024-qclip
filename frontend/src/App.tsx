import React from "react";
import "./App.css";
import HomePage from './components/docs/HomePage';
import Documentation from './components/docs/Documentation';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/" element={<HomePage />} />
        <Route path="/docs/documentation" element={<Documentation />} />
      </Routes>
    </Router>
  );
}

export default App;
