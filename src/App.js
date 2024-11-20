import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import MainNav from './components/MainNav/MainNav';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';

import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Services from './pages/ServicesPage/Services';
import CareerOpportunities from './pages/CareerOpportunities/CareerOpportunities';
import Contact from './pages/ContactPage/Contact';
import StaffingSolutions from './pages/StaffingSolutionsPage/StaffingSolutions';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MainNav />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/employment/' element={<CareerOpportunities />} />
            <Route path='/staffing-solutions' element={<StaffingSolutions />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Chatbot />
        <Footer />
      </div>
    );
  }
}

export default App;
