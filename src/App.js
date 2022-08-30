import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/employment/' component={CareerOpportunities} />
            <Route path='/staffing-solutions' component={StaffingSolutions} />
            <Route path='/contact' component={Contact} />
            {/* <Route path='/faq' component={FAQ} /> */}
          </Switch>
        </div>
        <Chatbot />
        <Footer />
      </div>
    );
  }
}

export default App;
