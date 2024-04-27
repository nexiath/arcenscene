import React from 'react';
import './sponsors.css';

const logos = [
    "/test.png",
    "/en-logo.png",
    "/test.png",
    "/en-logo.png",
    "/test.png",
    "/en-logo.png"
];

const Sponsors = () => (
    <section className="sponsors">
        <div className="sponsors-container">
            {logos.concat(logos).map((logo, index) => (
                <img
                    key={index}
                    src={logo}
                    alt={`Logo ${index % logos.length + 1}`}
                    className="sponsor-img"
                />
            ))}
        </div>
    </section>
);

export default Sponsors;
