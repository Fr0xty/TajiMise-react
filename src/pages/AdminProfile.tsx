import '../styles/AdminProfile.scss';

import twitterLogo from '../assets/images/twitter_logo.svg';
import youtubeLogo from '../assets/images/youtube_logo.svg';
import instagramLogo from '../assets/images/instagram_logo.svg';
import pixivLogo from '../assets/images/pixiv_logo.svg';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AdminInfo } from 'tajimise';

interface AdminInfoState extends AdminInfo {
    exists: boolean;
}

const AdminProfile = () => {
    const { adminHandle } = useParams();
    const [adminInfo, setAdminInfo] = useState<AdminInfoState>({
        exists: true,
        avatar: '',
        bio: 'loading..',
        handle: 'loading..',
        name: 'loading..',
        position: 'loading..',
        position_description: 'loading..',
        pronouns: 'loading..',
        socials: {},
    });

    useEffect(() => {
        (async () => {
            const adminInfoReq = await fetch(`/api/resource/admin-info?handle=${adminHandle}`);
            if (adminInfoReq.status === 404) return setAdminInfo({ ...adminInfo, exists: false });

            const adminInfoData = await adminInfoReq.json();
            adminInfoData.exists = true;

            setAdminInfo(adminInfoData);
            console.log(adminInfoData);
        })();
    }, [adminHandle]);

    return (
        <div className="admin-profile">
            {adminInfo.exists && (
                <div className="admin-profile">
                    <img src={adminInfo.avatar} alt={`${adminInfo.name}'s avatar`} />
                </div>
            )}

            {!adminInfo.exists && <div className="admin-not-exist">Admin does not exists.</div>}
        </div>
    );
};

export default AdminProfile;
