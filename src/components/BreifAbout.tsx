import '../styles/BreifAbout.scss';

import ceoAvatar from '../assets/images/tameiji_avatar.webp';
import fr0xtyAvatar from '../assets/images/fr0xty_avatar.webp';

const BreifAbout = () => {
    return (
        <div className="breif-about">
            <h1>Who run TajiMisé?</h1>

            <div className="cards">
                <div className="card-1 user-card">
                    <img src={ceoAvatar} alt="Tameiji avatar" />
                    <div className="description">
                        <h2>Tajima Eiji (Tameiji)</h2>
                        <h3>
                            CEO & Illustrator<span> ・ he/him</span>
                        </h3>
                        <p>
                            General Management of the company and the Illustrator / Creative Director for all of our
                            products.
                        </p>
                    </div>
                </div>

                <div className="card-2 user-card">
                    <img src={fr0xtyAvatar} alt="Fr0xty avatar" />
                    <div className="description">
                        <h2>Fr0xty</h2>
                        <h3>
                            IoT Engineer & Graphics Designer<span> ・they / them / any</span>
                        </h3>
                        <p>Handles any techology related tasks / Lead Developer and Primary Designer.</p>
                    </div>
                </div>

                {/* <div className="card-3 user-card">
                    <img src={ceoAvatar} alt="People avatar" />
                    <div className="description">
                        <h2>Name</h2>
                        <h3>Position<span> ・ Pronouns</span></h3>
                        <p>What I do and am responsible for in breif.</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default BreifAbout;
