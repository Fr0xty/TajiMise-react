import '../styles/AdminProfile.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AdminInfo } from 'tajimise';
import AdminInfoStrip from '../components/AdminInfoStrip';
import Navbar from '../components/Navbar';
import AdminInfoBody from '../components/AdminInfoBody';

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
                <>
                    <Navbar />
                    <div className="content">
                        <AdminInfoStrip
                            avatarURL={adminInfo.avatar}
                            name={adminInfo.name}
                            handle={adminInfo.handle}
                            position={adminInfo.position}
                        />
                        <AdminInfoBody
                            handle={adminInfo.handle}
                            bio={adminInfo.bio}
                            pronouns={adminInfo.pronouns}
                            socials={adminInfo.socials}
                        />
                    </div>
                </>
            )}

            {!adminInfo.exists && <div className="admin-not-exist">Admin does not exists.</div>}
        </div>
    );
};

export default AdminProfile;
