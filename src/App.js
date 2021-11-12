import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import MainNav from './components/MainNav/MainNav';
import Footer from './components/Footer/Footer';

import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Services from './pages/ServicesPage/Services';
import ProspectiveEmployee from './pages/EmploymentTab/ProspectiveEmployee';
import CurrentEmployee from './pages/EmploymentTab/CurrentEmployee';
import FAQ from './pages/FAQPage/FAQ';
import Contact from './pages/ContactPage/Contact';

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
            <Route path='/employment/prospective-employee' component={ProspectiveEmployee} />
            <Route path='/employment/current-employee' component={CurrentEmployee} />
            <Route path='/contact' component={Contact} />
            <Route path='/faq' component={FAQ} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
