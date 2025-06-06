// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import About from './Components/About';
import Project from './Components/Project';
import Second from './Components/second_sec';
import Third from './Components/third-sec';
import FourNew from './Components/Four';
import FiveNew from './Components/Five';
import SixNew from './Components/Six';
import Savennew from './Components/Saven';
import Redbgnew from './Components/Redbg';
import Formnew from './Components/Form';
import Footernew from './Components/Footer';
import Service from './Components/Service';
import Contact from './Components/Contact';

const HomeContent = () => (
  <>
    <Nav />
    <Second />
    <Third />
    <FourNew />
    <FiveNew />
    <SixNew />
    <Savennew />
    <Redbgnew />
    <Formnew />
    <Footernew />
  </>
);

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
