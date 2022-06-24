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

    return <div className="user-info"></div>;
};

export default UserInfo;
