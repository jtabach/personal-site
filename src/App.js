import React, { Component } from 'react';
import './App.css';

import NavLayout from './layouts/NavLayout';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLayout>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </NavLayout>
      </div>
    );
  }
}

export default App;
