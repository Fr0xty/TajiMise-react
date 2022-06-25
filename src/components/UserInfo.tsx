import '../styles/UserInfo.scss';

import { useEffect, useState } from 'react';

const UserInfo = () => {
    /**
     * stores all the fetched user info
     */
    const [userInfo, setUserInfo] = useState({
        name: null,
        avatarURL: null,
        strategy: null,
        email: null,
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
                strategy: profileData.strategy,
                email: profileData.email,
            });
        })();
    }, []);

    return (
        <div className="user-info-wrapper">
            <div className="user-info">
                <img
                    src="https://cdn.discordapp.com/avatars/395587171601350676/41bc86bf1cbc3664a0cb38dca7d77663.webp?size=4096"
                    alt="my user avatar"
                    className="no-select"
                />
                <ul>
                    <li>
                        <b className="no-select">
                            Username
                            <br />
                        </b>
                        Fr0xty
                    </li>
                    <br className="no-select" />
                    <li>
                        <b className="no-select">
                            Login Strategy
                            <br />
                        </b>
                        Discord
                    </li>
                    <br className="no-select" />
                    <li>
                        <b className="no-select">
                            Email
                            <br />
                        </b>
                        abc@gmail.com
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserInfo;
