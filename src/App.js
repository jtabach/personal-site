import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
