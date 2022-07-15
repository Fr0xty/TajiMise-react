import '../styles/AdminInfoBody.scss';

import discordLogo from '../assets/images/discord_logo.svg';
import twitterLogo from '../assets/images/twitter.svg';
import instagramLogo from '../assets/images/instagram.svg';
import pixivLogo from '../assets/images/pixiv.svg';
import youtubeLogo from '../assets/images/youtube.svg';
import redirectIcon from '../assets/images/redirect_icon.svg';

interface AdminInfoBodyProperties {
    handle: string;
    bio: string;
    pronouns: string;
    socials: {
        discord?: string;
        twitter?: string;
        instagram?: string;
        pixiv?: string;
        youtube?: string;
    };
}

const AdminInfoBody = ({ handle, bio, pronouns, socials }: AdminInfoBodyProperties) => {
    return (
        <div className="admin-info-body">
            <div className="bio section">
                <pre>
                    {handle} <span>/</span> Bio
                </pre>
                <p>{bio}</p>
            </div>

            <div className="pronouns section">
                <pre>
                    {handle} <span>/</span> Pronouns
                </pre>
                <div className="pronouns-content">
                    {[...pronouns.split('/')].map((pronoun) => {
                        return <p>{pronoun}</p>;
                    })}
                </div>
            </div>

            <div className="wrapper-socials">
                <pre>Socials</pre>

                <div className="socials no-select">
                    {socials.discord && (
                        <div className="social">
                            <img className="discord-logo" src={discordLogo} alt="discord logo" />
                            <h4>Discord</h4>
                            <img className="redirect-icon" src={redirectIcon} alt="redirect icon" />
                        </div>
                    )}
                    {!socials.twitter && (
                        <div className="social">
                            <img className="twitter-logo" src={twitterLogo} alt="twitter logo" />
                            <h4>Twitter</h4>
                            <img className="redirect-icon" src={redirectIcon} alt="redirect icon" />
                        </div>
                    )}
                    {!socials.instagram && (
                        <div className="social">
                            <img className="instagram-logo" src={instagramLogo} alt="instagram logo" />
                            <h4>Instagram</h4>
                            <img className="redirect-icon" src={redirectIcon} alt="redirect icon" />
                        </div>
                    )}
                    {!socials.pixiv && (
                        <div className="social">
                            <img className="pixiv-logo" src={pixivLogo} alt="pixiv logo" />
                            <h4>Pixiv</h4>
                            <img className="redirect-icon" src={redirectIcon} alt="redirect icon" />
                        </div>
                    )}
                    {!socials.youtube && (
                        <div className="social">
                            <img className="youtube-logo" src={youtubeLogo} alt="youtube logo" />
                            <h4>Youtube</h4>
                            <img className="redirect-icon" src={redirectIcon} alt="redirect icon" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminInfoBody;
