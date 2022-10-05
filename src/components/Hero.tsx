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
                    {t('hero_description_1')}
                    <i>{t('hero_description_2')}</i>
                    {t('hero_description_3')}
                    <i>{t('hero_description_4')}</i>
                    {t('hero_description_5')}
                    <i>{t('hero_description_6')}</i>
                    {t('hero_description_7')}
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
