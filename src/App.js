import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import MainNav from './components/MainNav/MainNav';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';

import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Services from './pages/ServicesPage/Services';
import Employment from './pages/EmploymentTab/Employment';
import Contact from './pages/ContactPage/Contact';
import CareerOpportunities from './pages/EmploymentTab/CareerOpportunities/CareerOpportunities';

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
            <Route path='/employment/' component={Employment} />
            <Route path='/contact' component={Contact} />
            <Route path='/career-opportunities' component={CareerOpportunities} />
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
