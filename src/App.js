import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import MainNav from './components/MainNav/MainNav';
import Footer from './components/Footer/Footer';

import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Services from './pages/ServicesPage/Services';
import Employment from './pages/EmploymentPage/Employment';
import FAQ from './pages/FAQPage/FAQ';
import Contact from './pages/ContactPage/Contact';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MainNav />
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/employment' component={Employment} />
          <Route path='/faq' component={FAQ} />
          <Route path='/contact' component={Contact} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
