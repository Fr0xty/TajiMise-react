import '../styles/LoginSelection.scss';

import DiscordLogo from '../assets/images/discord_logo.svg';
import GoogleLogo from '../assets/images/google_logo.svg';

const LoginSelection = ({ method }: { method: 'discord' | 'google' }) => {
    const redirect = () => {
        // TODO: implement google login and remove this
        if (method === 'google')
            return alert('Sorry, Google login is not yet implemented. We apologies for the inconvenience.');

        document.location.href = `/api/redirect/oauth/${method}`;
    };

    return (
        <div className={`login-selection ${method}`} onClick={redirect}>
            {method === 'discord' && (
                <>
                    <img src={DiscordLogo} alt="Discord Logo" />
                    <h2>Discord</h2>
                    <footer>Recomended!</footer>
                </>
            )}

            {method === 'google' && (
                <>
                    <img src={GoogleLogo} alt="Google Logo" />
                    <h2>Google</h2>
                </>
            )}
        </div>
    );
};

export default LoginSelection;
