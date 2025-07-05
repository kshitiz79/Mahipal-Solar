import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';

import Updates from './pages/Updates';
import Gallery from './pages/Gallery';
import More from './pages/More';
import Contact from './pages/Contact';
import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="updates" element={<Updates />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="more" element={<More />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
