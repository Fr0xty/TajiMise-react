import '../styles/Hero.scss';
import sample1 from '../assets/images/sample1.png';
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
                <img src={sample1} alt="sample" />
            </div>
        </div>
    );
};

export default Hero;
