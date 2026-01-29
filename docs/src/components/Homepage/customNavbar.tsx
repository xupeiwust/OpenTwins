import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import '../../css/home.css'

export default function CustomNavbar(): JSX.Element {
    return (
        <nav className="navbar-custom">
            <div className="navbar-container">
                {/* Left: Brand Identity */}
                <Link to="/" className="navbar-brand">
                    <img 
                        src={useBaseUrl('/img/logo.svg')} 
                        alt="OpenTwins Logo" 
                        className="brand-logo" 
                    />
                    <span className="brand-text">opentwins</span>
                </Link>

                {/* Right: Navigation & Actions */}
                <div className="navbar-links">
                    
                    <Link
                        className="nav-link hide-mobile"
                        to="https://ertis.uma.es/">
                        About Us
                    </Link>

                    <Link
                        className="nav-icon"
                        to="https://github.com/ertis-research/opentwins">
                        <ThemedImage
                            alt="GitHub"
                            height="24px"
                            sources={{
                                light: useBaseUrl('/img/github_black.svg'),
                                dark: useBaseUrl('/img/github_white.svg'),
                            }}
                        />
                    </Link>
                    
                    <NavbarColorModeToggle />
                </div>
            </div>
        </nav>
    );
}