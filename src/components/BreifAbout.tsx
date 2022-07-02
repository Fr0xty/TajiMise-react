import '../styles/BreifAbout.scss';

import tameijiAvatar from '../assets/images/tameiji_avatar.webp';
import fr0xtyAvatar from '../assets/images/fr0xty_avatar.webp';
import makitoAvatar from '../assets/images/makito_avatar.webp';
import arataAvatar from '../assets/images/arata_avatar.webp';
import AdminCard from './AdminCard';

const BreifAbout = () => {
    return (
        <div className="breif-about">
            <h1 className="home-main-header">Who run TajiMisé?</h1>

            <div className="cards">
                <AdminCard
                    avatar={tameijiAvatar}
                    description="General Management of the company and the Illustrator / Creative Director for all of our
                            products."
                    name="Tajima Eiji (Tameiji)"
                    position="CEO & Illustrator"
                    pronouns="he / him"
                    classNames="tameiji-card user-card"
                />
                <AdminCard
                    avatar={fr0xtyAvatar}
                    description="Handles any techology related tasks / Lead Developer and Primary Designer."
                    name="Fr0xty"
                    position="IoT Engineer & Graphics Designer"
                    pronouns="they / them / any"
                    classNames="fr0xty-card user-card"
                />
                <AdminCard
                    avatar={makitoAvatar}
                    description="Marketing and increasing exposure of the company."
                    name="Dr. Makito"
                    position="Receptionist"
                    pronouns="he / him"
                    classNames="makito-card user-card"
                />
                <AdminCard
                    avatar={arataAvatar}
                    description="Helps in finances of the company by collecting, tracking, and auditing cashflow."
                    name="Arata"
                    position="Accountant"
                    pronouns="he / him"
                    classNames="arata-card user-card"
                />
            </div>
        </div>
    );
};

export default BreifAbout;
