import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/AdminProfileForm.scss';

const AdminProfileForm = () => {
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

            /**
             * authorized access
             */
        })();
    }, []);

    return <div className="admin-profile-form">hi</div>;
};

export default AdminProfileForm;
