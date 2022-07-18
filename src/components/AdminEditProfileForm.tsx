import { useEffect } from 'react';
import '../styles/AdminEditProfileForm.scss';

interface AdminEditProfileFormProperties {
    authorized: boolean;
}

const AdminEditProfileForm = ({ authorized }: AdminEditProfileFormProperties) => {
    useEffect(() => {
        (async () => {
            if (!authorized) return;
        })();
    }, [authorized]);

    return (
        <div className="admin-edit-profile-form">
            <div className="name-field">
                <span>Name</span>
                <input type="text" />
            </div>
        </div>
    );
};

export default AdminEditProfileForm;
