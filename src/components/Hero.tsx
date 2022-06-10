import '../styles/Hero.scss';

import heroVisual from '../assets/images/hero_visual.png';

import Navbar from './Navbar';

const Hero = ({ currentPage }: { currentPage?: 'home' | 'about' | 'products' }) => {
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
                        <a href="/login">
                            <button>Sign Up</button>
                        </a>
                        <pre>START YOUR JOURNEY!</pre>
                    </div>
                </div>
                <img className="hero-visual" src={heroVisual} alt="visual" />
            </div>
        </div>
    );
};

export default Hero;
