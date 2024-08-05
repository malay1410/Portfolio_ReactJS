import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import 'leaflet/dist/leaflet.css';
import './App.scss';



function App() {
  return (
    <>
    <div class="live-background-animation">
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
      </Route>
    </Routes>
    </>
  );
}

export default App;
