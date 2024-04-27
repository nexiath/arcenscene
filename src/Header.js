import React from 'react';
import './header.css'

const Header = () => (
  <header>
    <nav>
      <div className="logo">ARCENSCENE</div>
      <ul className="nav-links">
        <li><a href="#home">1</a></li>
        <li><a href="#about">2</a></li>
        <li><a href="#services">3</a></li>
        <li><a href="#portfolio">4</a></li>
        <li><a href="#team">5</a></li>
        <li><a href="#contact">6</a></li>
      </ul>
      <button className="btn-primary">BOUTON</button>
    </nav>
  </header>
);

export default Header;
