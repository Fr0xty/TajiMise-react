import '../styles/Hero.scss';
import Navbar from './Navbar';

const Hero = ({ currentPage }: { currentPage?: 'home' | 'about' | 'products' }) => {
    return (
        <div className="hero no-select">
            <Navbar currentPage={currentPage} noBackground={true} />

            <div className="content">
                <h1>
                    <span>TajiMisé</span> Store.
                </h1>
                <p>
                    Quality, Custom-Tailored Art is our raison d'être. <i>Anime</i>, <i>Manga</i> or <i>Game</i>{' '}
                    characters you ruminate, why not bring them to reality?
                </p>
            </div>
        </div>
    );
};

export default Hero;
