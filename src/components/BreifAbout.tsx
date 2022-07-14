import '../styles/BreifAbout.scss';

import tameijiAvatar from '../assets/images/tameiji_avatar.webp';
import fr0xtyAvatar from '../assets/images/fr0xty_avatar.webp';
import capirinAvatar from '../assets/images/capirin_avatar.webp';
import arataAvatar from '../assets/images/arata_avatar.webp';
import AdminCard from './AdminCard';

const BreifAbout = () => {
    return (
        <div className="breif-about">
            <h1 className="home-main-header">Who run TajiMisé?</h1>

            <div className="cards-wrapper">
                <div className="cards">
                    <AdminCard
                        avatar={tameijiAvatar}
                        description="General Management of the company and Artist for our
                            products."
                        name="Tajima Eiji (Tameiji)"
                        position="CEO & Artist"
                        pronouns="he / him"
                        handle="tameiji"
                        className="tameiji-card"
                    />
                    <AdminCard
                        avatar={capirinAvatar}
                        description="Artist who fullfils our products."
                        name="capirin"
                        position="Artist"
                        pronouns="he / him"
                        handle="capirin"
                        className="capirin-card"
                    />
                    <AdminCard
                        avatar={fr0xtyAvatar}
                        description="Handles any technology-related tasks / Lead Developer and Primary Designer."
                        name="Fr0xty"
                        position="IoT Engineer & Graphics Designer"
                        pronouns="they / them / any"
                        handle="fr0xty"
                        className="fr0xty-card"
                    />
                    <AdminCard
                        avatar={arataAvatar}
                        description="Helps with the finances of the company by collecting, tracking, and auditing cashflow."
                        name="Arata"
                        position="Accountant"
                        pronouns="they / them / it"
                        handle="arata"
                        className="arata-card"
                    />
                </div>
            </div>
        </div>
    );
};

export default BreifAbout;
