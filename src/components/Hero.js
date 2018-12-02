import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import './Hero.scss';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <Scrollchor
          to="#about"
          className="nav-link"
          animate={{ duration: 400 }}
          disableHistory={true}
        >
          About
        </Scrollchor>
        <Scrollchor
          to="#portfolio"
          className="nav-link"
          animate={{ duration: 800 }}
          disableHistory={true}
        >
          Portfolio
        </Scrollchor>
        <Scrollchor
          to="#contact"
          className="nav-link"
          animate={{ duration: 1200 }}
          disableHistory={true}
        >
          Contact
        </Scrollchor>
        <img src="https://via.placeholder.com/150x50" alt=""/>
        <h2>Jeff Tabachnick</h2>
      </div>
    );
  }
}

export default Hero;