import '../styles/Hero.scss';
import sample1 from '../assets/images/sample1.png';
import sample2 from '../assets/images/sample2.png';
import Navbar from './Navbar';

import { useTranslation } from 'react-i18next';

const Hero = ({ currentPage }: { currentPage?: 'home' | 'about' | 'products' }) => {
    const { t } = useTranslation();

    return (
        <div className="hero no-select">
            <Navbar currentPage={currentPage} noBackground={true} />

            <div className="content">
                <h1>
                    <span>TajiMisé</span> {t('hero_header')}
                </h1>
                <p>
                    Quality, Custom-Tailored Art is our raison d'être. <i>Anime</i>, <i>Manga</i> or <i>Game</i>{' '}
                    characters you ruminate, why not bring them to reality?
                </p>

                <div className="samples">
                    <img src={sample1} className="sample-1" alt="sample 1" />
                    <img src={sample2} className="sample-2" alt="sample 2" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
