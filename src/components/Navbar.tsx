import '../styles/Navbar.scss';
import transparent_tajimise_navbar from '../assets/images/transparent_tajimise_navbar.png';
import { useEffect } from 'react';

const Navbar = ({ currentPage }: { currentPage?: 'home' | 'about' | 'products' }) => {
    useEffect(() => {
        if (!currentPage) return;
        document.querySelector(`.navbar a.${currentPage}-nav`)?.classList.add('current-page');
    }, []);

    return (
        <div className="navbar-wrapper">
            <div className="mobile-menu-backgrounds">
                <div className="background-1" />
                <div className="background-2" />
                <div className="background-3" />
            </div>
            <div className="navbar no-select">
                <a href="/">
                    <img src={transparent_tajimise_navbar} alt="tajimise logo" />
                </a>

                <nav>
                    <a href="/" className="home-nav">
                        Home
                    </a>
                    <a href="/products" className="products-nav">
                        Products
                    </a>
                    <a href="/about" className="about-nav">
                        About
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://discord.gg/dKNrYTeFcv">
                        Discord Server
                    </a>
                </nav>

                <div
                    className="burger-menu"
                    onClick={() => document.querySelector('.navbar-wrapper')?.classList.toggle('open-nav')}
                >
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
