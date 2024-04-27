import React, { useEffect, useRef } from 'react';
import './sponsors.css';

const logos = [
    "/test.png",
    "/en-logo.png",
    "/test.png",
    "/en-logo.png",
    "/test.png",
    "/en-logo.png"
];

const Sponsors = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleImagesLoaded = () => {
            containerRef.current.style.animationPlayState = 'running';
        };

        containerRef.current.addEventListener('load', handleImagesLoaded, { capture: true });
        return () => {
            containerRef.current.removeEventListener('load', handleImagesLoaded, { capture: true });
        };
    }, []);

    return (
        <section className="sponsors">
            <div className="sponsors-container" ref={containerRef}>
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
};

export default Sponsors;
