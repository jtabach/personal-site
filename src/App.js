import React, { Component } from 'react';
import './App.css';

import NavLayout from './components/NavLayout';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


class App extends Component {
  constructor(props) {
    super (props);
  }

  render() {
    return (
      <div className="App">
        <NavLayout />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
