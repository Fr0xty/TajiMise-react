import '../styles/AdminEditProfileForm.scss';

import arrowLeft from '../assets/images/arrow_left.svg';

import { useEffect, useState } from 'react';

interface AdminEditProfileFormProperties {
    authorized: boolean;
    backToProfile: () => void;
}

const AdminEditProfileForm = ({ authorized, backToProfile }: AdminEditProfileFormProperties) => {
    const [wordCountName, setWordCountName] = useState(0);

    useEffect(() => {
        (async () => {
            /**
             * for focus styling
             */
            document.querySelector('.admin-edit-profile-form input')?.addEventListener('focus', (e) => {
                (e.target as HTMLElement).parentElement?.classList.add('focused');
            });
            document.querySelector('.admin-edit-profile-form input')?.addEventListener('focusout', (e) => {
                (e.target as HTMLElement).parentElement?.classList.remove('focused');
            });

            /**
             * wait until authorization is done before fetching data to edit
             */
            if (!authorized) return;
        })();
    }, [authorized]);

    return (
        <div className="admin-edit-profile-form">
            <div className="form">
                <div className="form-header">
                    <div className="left-group">
                        <img className="back-nav" src={arrowLeft} alt="back" onClick={backToProfile} />
                        <h2>Edit profile</h2>
                    </div>
                    <button>Save</button>
                </div>

                <div className="form-body">
                    <div className="field">
                        <div className="description">
                            <span className="input-name">Name</span>
                            <span className="input-limit">{wordCountName} / 50</span>
                        </div>
                        <input
                            type="text"
                            maxLength={50}
                            onChange={(e) => {
                                setWordCountName(e.target.value.length);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminEditProfileForm;
