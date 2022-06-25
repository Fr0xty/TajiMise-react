import '../styles/Account.scss';

import UserInfo from '../components/UserInfo';
import LogoutConfirmPrompt from '../components/LogoutConfirmPrompt';
import { useState } from 'react';

const Account = () => {
    const [showLogoutPrompt, setShowLogoutPrompt] = useState(false);

    const LogoutEvent = async () => {};

    return (
        <div className="account-wrapper">
            <LogoutConfirmPrompt show={showLogoutPrompt} />
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
