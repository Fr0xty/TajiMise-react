import '../styles/Account.scss';

import UserInfo from '../components/UserInfo';
import LogoutConfirmPrompt from '../components/LogoutConfirmPrompt';

const Account = () => {
    const LogoutEvent = async () => {
        document.querySelector('.logout-confirm-prompt')?.classList.add('show');
    };

    return (
        <div className="account-wrapper">
            <LogoutConfirmPrompt />
            <div className="account">
                <div className="content-wrapper">
                    <UserInfo />
                    <div className="buttons no-select">
                        <a href="/">
                            <button className="home-btn">Go to Home</button>
                        </a>
                        <button className="logout-btn" onClick={LogoutEvent}>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
