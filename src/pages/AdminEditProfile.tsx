import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminEditProfileForm from '../components/AdminEditProfileForm';
import Navbar from '../components/Navbar';
import '../styles/AdminEditProfile.scss';

const AdminEditProfile = () => {
    const [authorized, setAuthorized] = useState(false);

    const { adminHandle } = useParams();

    const redirectBackToProfile = () => {
        document.location.replace(`/admin/${adminHandle}`);
    };

    useEffect(() => {
        (async () => {
            if (!document.cookie.includes('logged_in=')) return redirectBackToProfile();
            const isAdminReq = await fetch(`/api/resource/is-admin?handle=${adminHandle}`);
            if (isAdminReq.status === 401) return;
            if (isAdminReq.status !== 200) return redirectBackToProfile();

            if ((await isAdminReq.text()) === 'false') return redirectBackToProfile();

            setAuthorized(true);
        })();
    }, []);

    return (
        <div className="admin-profile-form">
            <Navbar />
            <AdminEditProfileForm backToProfile={redirectBackToProfile} authorized={authorized} />
        </div>
    );
};

export default AdminEditProfile;
