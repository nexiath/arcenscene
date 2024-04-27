import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav>
                <div className="logo">ARCENSCENE</div>
                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Fermer' : 'Menu'}
                </button>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#actualites">Actualités</a></li>
                    <li><a href="#adhesion">Adhésion</a></li>
                    <li><a href="#photos">Galerie Photos</a></li>
                    <li><a href="#evenements">Événements à venir</a></li>
                    <li><a href="#presentation">Présentation de l'association</a></li>
                </ul>
                <button className="btn-primary">Devenir Membre</button>
            </nav>
        </header>
    );
};

export default Header;
