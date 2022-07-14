import '../styles/AdminProfile.scss';

import twitterLogo from '../assets/images/twitter_logo.svg';
import youtubeLogo from '../assets/images/youtube_logo.svg';
import instagramLogo from '../assets/images/instagram_logo.svg';
import pixivLogo from '../assets/images/pixiv_logo.svg';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface AdminInfoState {
    exists: boolean;
    bio?: string;
    socials?: any;
}

const AdminProfile = () => {
    const { adminHandle } = useParams();
    const [adminInfo, setAdminInfo] = useState<AdminInfoState>({ exists: true });

    useEffect(() => {
        (async () => {
            const adminInfoReq = await fetch(`/api/resource/admin-profile-info?handle=${adminHandle}`);
            if (adminInfoReq.status === 404) return setAdminInfo({ exists: false });

            const adminInfoData = await adminInfoReq.json();
            adminInfoData.exists = true;

            setAdminInfo(adminInfoData);
        })();
    }, [adminHandle]);

    return (
        <div className="admin-profile">
            {adminInfo.exists && (
                <div className="admin-profile">
                    <div className="wrapper">
                        <p>{adminHandle}</p>
                        <img src={youtubeLogo} alt="a youtube icon" />
                        <img src={twitterLogo} alt="a twitter icon" />
                        <img src={instagramLogo} alt="a instagram icon" />
                        <img src={pixivLogo} alt="a pixiv icon" />
                    </div>
                </div>
            )}

            {!adminInfo.exists && <div className="admin-not-exist">Admin does not exists.</div>}
        </div>
    );
};

export default AdminProfile;
