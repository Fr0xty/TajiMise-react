import '../styles/Navbar.scss';
import transparent_tajimise_navbar from '../assets/images/transparent_tajimise_navbar.png';
import { useEffect, useState } from 'react';
import AccountBar from './AccountBar';
import LocaleSelector from './LocaleSelector';
import { useTranslation } from 'react-i18next';

const Navbar = ({
    currentPage,
    noBackground,
    noAccountNavs,
}: {
    currentPage?: 'home' | 'about' | 'products';
    noBackground?: boolean;
    noAccountNavs?: boolean;
}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (document.cookie.includes('logged_in=')) setLoggedIn(true);

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

            <div className="navbar">
                <div className="left-group">
                    <a href="/">
                        <img src={transparent_tajimise_navbar} alt="tajimise logo" />
                    </a>

                    <nav>
                        <a href="/" className="home-nav">
                            {t('navbar_home')}
                        </a>
                        <a href="/products" className="products-nav">
                            {t('navbar_products')}
                        </a>
                        <a href="/about" className="about-nav">
                            {t('navbar_about')}
                        </a>
                        <a target="_blank" rel="noreferrer" href="/api/redirect/discord-server">
                            {t('navbar_discord_server')}
                        </a>
                    </nav>
                </div>

                <div className="right-group">
                    <LocaleSelector />
                    {!loggedIn && (
                        <a href="/login">
                            <button className="login-btn">Login</button>
                        </a>
                    )}
                    {loggedIn && !noAccountNavs && <AccountBar />}
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
