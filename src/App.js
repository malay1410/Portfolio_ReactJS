import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Eduation from './components/Education';
import './App.scss';


function App() {
   
  return (
    <>
      <div className="live-background-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="education" element={<Eduation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
