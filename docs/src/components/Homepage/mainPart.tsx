import React, { useState, useEffect } from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import '../../css/home.css';

const IMAGES = [
    '/img/demo/demo1.jpeg',
    '/img/demo/demo2.jpeg',
    '/img/demo/demo3.png',
    '/img/demo/demo4.jpeg'
];

export default function MainPart(): JSX.Element {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === IMAGES.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="hero-section">
            <div className="hero-container">
                
                {/* --- LEFT COLUMN: Brand & Info --- */}
                <div className="hero-left">
                    <h1 className="brand-title-huge">
                        <span className="text-open">Open</span>
                        <span className="text-twins">Twins</span>
                    </h1>

                    <p className="hero-description">
                        Innovative <b>open-source</b> platform that specializes in developing next-gen <b>composite</b> digital twins
                    </p>

                    <div className="cta-group">
                        <Link
                            className="button button--primary button--lg"
                            to="/docs/quickstart">
                            Get Started
                        </Link>
                        
                        <Link
                            className="button button--secondary button--lg"
                            to="https://opentwins.ertis.uma.es">
                            Demo
                        </Link>

                        <Link
                            className="button button--secondary button--lg"
                            to="https://github.com/ertis-research/opentwins">
                            GitHub
                        </Link>
                    </div>

                    <div className="partners-section">
                        <span className="partners-label">An initiative of</span>
                        <div className="partners-logos">
                            <a href="https://ertis.uma.es" target="_blank" rel="noopener noreferrer" className="partner-link">
                                <ThemedImage
                                    alt="ERTIS"
                                    className="partner-logo"
                                    sources={{
                                        light: useBaseUrl('/img/ertis_black.svg'),
                                        dark: useBaseUrl('/img/ertis_white.svg'),
                                    }}
                                />
                            </a>
                            <a href="https://www.itis.uma.es" target="_blank" rel="noopener noreferrer" className="partner-link">
                                <ThemedImage
                                    alt="ITIS"
                                    className="partner-logo"
                                    sources={{
                                        light: useBaseUrl('/img/ITIS_black.svg'),
                                        dark: useBaseUrl('/img/ITIS_white.svg'),
                                    }}
                                />
                            </a>
                            <a href="https://www.uma.es" target="_blank" rel="noopener noreferrer" className="partner-link">
                                <ThemedImage
                                    alt="UMA"
                                    className="partner-logo"
                                    sources={{
                                        light: useBaseUrl('/img/uma_black.png'),
                                        dark: useBaseUrl('/img/uma_white.png'),
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN: Carousel Window --- */}
                <div className="hero-right">
                    <div className="carousel-frame">
                        <div className="carousel-header">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        
                        <div className="carousel-content">
                            {IMAGES.map((src, index) => (
                                <img
                                    key={src}
                                    src={useBaseUrl(src)}
                                    alt={`OpenTwins Interface Demo ${index + 1}`}
                                    className="carousel-image"
                                    style={{
                                        opacity: index === currentImageIndex ? 1 : 0,
                                        zIndex: index === currentImageIndex ? 2 : 1
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}