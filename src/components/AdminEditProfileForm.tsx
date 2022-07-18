import '../styles/AdminEditProfileForm.scss';

import arrowLeft from '../assets/images/arrow_left.svg';

import { useEffect } from 'react';

interface AdminEditProfileFormProperties {
    authorized: boolean;
    backToProfile: () => void;
}

const AdminEditProfileForm = ({ authorized, backToProfile }: AdminEditProfileFormProperties) => {
    useEffect(() => {
        (async () => {
            if (!authorized) return;
        })();
    }, [authorized]);

    return (
        <div className="admin-edit-profile-form">
            <form>
                <div className="form-header">
                    <div className="left-group">
                        <img className="back-nav" src={arrowLeft} alt="back" onClick={backToProfile} />
                        <h2>Edit profile</h2>
                    </div>
                    <button>Save</button>
                </div>

                <div className="name-field">
                    <span>Name</span>
                    <input type="text" />
                </div>
            </form>
        </div>
    );
};

export default AdminEditProfileForm;
