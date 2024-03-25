import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Explore from './Explore';
import Footer from './Footer';
import Profile from './Profile';

const Layout = () => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Home></Home> */}

            <Routes>
            <Route path="/explore" element={<Explore />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile></Profile>} />
            </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default Layout;
