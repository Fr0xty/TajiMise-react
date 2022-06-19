import '../styles/Navbar.scss';
import transparent_tajimise_navbar from '../assets/images/transparent_tajimise_navbar.png';
import { useEffect } from 'react';

const Navbar = ({
    currentPage,
    noBackground,
}: {
    currentPage?: 'home' | 'about' | 'products';
    noBackground?: boolean;
}) => {
    useEffect(() => {
        if (!currentPage) return;
        document.querySelector(`.navbar a.${currentPage}-nav`)?.classList.add('current-page');
    }, []);

    return (
        <div className="navbar-wrapper no-select">
            <div className="mobile-menu-backgrounds">
                <div className="background-1" />
                <div className="background-2" />
                <div className="background-3" />
            </div>
            {!noBackground && <div className="background" />}

            <div className="navbar ">
                <div className="left-group">
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
                        <a target="_blank" rel="noreferrer" href="/api/redirect/discord-server">
                            Discord Server
                        </a>
                    </nav>
                </div>

                <div className="right-group">
                    <a href="/login">
                        <button>Login</button>
                    </a>
                </div>
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
