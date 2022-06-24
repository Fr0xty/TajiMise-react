import '../styles/AccountBar.scss';

import userIcon from '../assets/images/user_icon.svg';
import cartIcon from '../assets/images/cart_icon.svg';
import { useEffect, useState } from 'react';

const AccountBar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('loading...');
    const [userAvatar, setUserAvatar] = useState(userIcon);

    useEffect(() => {
        (async () => {
            if (document.cookie.includes('logged_in=')) {
                setLoggedIn(true);

                const fetchProfileReq = await fetch('/api/resource/profile');
                const { name, avatarURL } = await fetchProfileReq.json();
                setUsername(name);
                if (avatarURL === null) return;
                setUserAvatar(avatarURL);
            }
        })();
    }, []);

    return (
        <div className="account-bar">
            <a href={loggedIn ? '/cart' : '/login'}>
                <img className="cart-icon selection" src={cartIcon} alt="shopping cart icon" />
            </a>
            <a href={loggedIn ? '/account' : '/login'}>
                <div className="account-navigation selection">
                    <p className="account-name">{loggedIn ? username : 'Log In'}</p>
                    <img className="avatar-icon" src={userAvatar} alt="avatar icon" />
                </div>
            </a>
        </div>
    );
};

export default AccountBar;
