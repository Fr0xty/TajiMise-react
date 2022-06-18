import '../styles/Hero.scss';

import Navbar from './Navbar';
import { useEffect, useState } from 'react';

const Hero = ({ currentPage }: { currentPage?: 'home' | 'about' | 'products' }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (document.cookie.includes('logged_in=')) setLoggedIn(true);
    }, []);

    return (
        <div className="hero no-select">
            <Navbar currentPage={currentPage} />

            <div className="content">
                <div className="texts">
                    <h1>
                        Welcome To <br />
                        <span>TajiMisé</span> Store!
                    </h1>
                    <p>
                        Quality, Custom-Tailored Art is our raison d'être. <i>Anime</i>, <i>Manga</i> or <i>Game</i>{' '}
                        characters you ruminate, why not bring them to reality?
                    </p>
                    <div className="action-row">
                        <a href={loggedIn ? '/products' : '/login'}>
                            <button>{loggedIn ? 'See Products' : 'Sign Up'}</button>
                        </a>
                        <pre>{loggedIn ? 'BROWSE OUR WIDE SELECTION!' : 'START YOUR JOURNEY!'}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
