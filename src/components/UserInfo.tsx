import '../styles/UserInfo.scss';
import userIcon from '../assets/images/user_icon.svg';
import { useEffect, useState } from 'react';

const UserInfo = () => {
    /**
     * stores all the fetched user info
     */
    const [userInfo, setUserInfo] = useState({
        name: 'loading...',
        avatarURL: userIcon,
        strategy: 'loading...',
        email: 'loading...',
    });

    /**
     * fetch data from tajimise api
     */
    useEffect(() => {
        (async () => {
            const profileReq = await fetch('/api/resource/profile?additional=true');
            if (profileReq.status !== 200) return;

            const profileData = await profileReq.json();

            setUserInfo({
                name: profileData.name,
                avatarURL: profileData.avatarURL,
                strategy: profileData.strategy[0]
                    .toUpperCase()
                    .concat(profileData.strategy.slice(1, profileData.strategy.length)),
                email: profileData.email,
            });
        })();
    }, []);

    return (
        <div className="user-info-wrapper">
            <div className="user-info">
                <img src={userInfo.avatarURL || userIcon} alt="my user avatar" className="no-select" />
                <ul>
                    <li>
                        <b className="no-select">Username</b>
                        <p>{userInfo.name}</p>
                    </li>
                    <br className="no-select" />
                    <li>
                        <b className="no-select">Login Strategy</b>
                        <p>{userInfo.strategy}</p>
                    </li>
                    <br className="no-select" />
                    <li>
                        <b className="no-select">Email</b>
                        <p>{userInfo.email || '-'}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserInfo;
