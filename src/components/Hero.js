import React, { Component } from 'react';
import './Hero.scss';

class Hero extends Component {
  render() {
    return (
      <div id="hero" className="hero container-fluid">
        <div className="hero__contain">
          <div className='col-8'>
            <h1 className="hero__title"><span>Hi I'm</span><span>Jeff Tabachnick</span></h1>
            <h4 className="hero__description">Front End Engineer &amp; Architect</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;