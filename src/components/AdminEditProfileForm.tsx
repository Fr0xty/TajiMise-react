import '../styles/AdminEditProfileForm.scss';

import arrowLeft from '../assets/images/arrow_left.svg';

import { useEffect, useState } from 'react';

interface AdminEditProfileFormProperties {
    authorized: boolean;
    adminHandle: string;
    backToProfile: () => void;
}

const AdminEditProfileForm = ({ authorized, adminHandle, backToProfile }: AdminEditProfileFormProperties) => {
    const [wordCountName, setWordCountName] = useState(0);
    const [wordCountBio, setWordCountBio] = useState(0);
    const [wordCountPronouns, setWordCountPronouns] = useState(0);

    const [nameField, setNameField] = useState('');
    const [bioField, setBioField] = useState('');
    const [pronounsField, setPronounsField] = useState('');

    const setFieldError = (fieldName: string) => {
        document.querySelector(`.admin-edit-profile-form .form-body .${fieldName}-field`)?.classList.add('error');
    };

    const removeFieldError = (fieldName: string) => {
        document.querySelector(`.admin-edit-profile-form .form-body .${fieldName}-field`)?.classList.remove('error');
    };

    /**
     * called on Save button clicked
     */
    const saveProfile = async () => {
        const data = {
            adminHandle,
            data: {
                name: nameField,
                bio: bioField,
                pronouns: pronounsField,
            },
        };

        /**
         * raise error in client if any field is empty (no api call)
         */
        Object.entries(data).forEach(([field, value]) => {
            if (!value) setFieldError(field);
        });

        await fetch(`/api/resource/update-admin-info`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        document.location.href = `/admin/${adminHandle}`;
    };

    useEffect(() => {
        (async () => {
            /**
             * for focus styling
             */
            const formInputs = document.querySelectorAll('.admin-edit-profile-form input, textarea');

            formInputs.forEach((input) => {
                input.addEventListener('focus', (e) => {
                    (e.target as HTMLElement).parentElement?.classList.add('focused');
                });
                input.addEventListener('focusout', (e) => {
                    (e.target as HTMLElement).parentElement?.classList.remove('focused');
                });
            });

            /**
             * wait until authorization is done before fetching data to edit
             */
            if (!authorized) return;

            /**
             * fetch original data to set fields
             */
            const adminDataReq = await fetch(`/api/resource/admin-info?handle=${adminHandle}`);
            if (adminDataReq.status === 404) return backToProfile();
            if (adminDataReq.status !== 200) return;

            const adminData = await adminDataReq.json();
            setNameField(adminData.name);
            setWordCountName(adminData.name.length);

            setBioField(adminData.bio);
            setWordCountBio(adminData.bio.length);

            setPronounsField(adminData.pronouns);
            setWordCountPronouns(adminData.pronouns.length);
        })();
    }, [authorized, adminHandle, backToProfile]);

    return (
        <div className="admin-edit-profile-form">
            <div className="form">
                <div className="form-header">
                    <div className="left-group">
                        <img className="back-nav" src={arrowLeft} alt="back" onClick={backToProfile} />
                        <h2>Edit profile</h2>
                    </div>
                    <button onClick={saveProfile}>Save</button>
                </div>

                <div className="form-body">
                    <div className="field name-field">
                        <div className="description">
                            <span className="input-name">Name</span>
                            <span className="input-limit">{wordCountName} / 50</span>
                        </div>
                        <input
                            type="text"
                            maxLength={50}
                            onChange={(e) => {
                                setWordCountName(e.target.value.length);
                                setNameField(e.target.value);
                                removeFieldError('name');
                            }}
                            value={nameField}
                        />
                    </div>

                    <div className="field bio-field">
                        <div className="description">
                            <span className="input-name">Bio</span>
                            <span className="input-limit">{wordCountBio} / 250</span>
                        </div>
                        <textarea
                            maxLength={250}
                            onChange={(e) => {
                                setWordCountBio(e.target.value.length);
                                setBioField(e.target.value);
                                removeFieldError('bio');
                            }}
                            value={bioField}
                        />
                    </div>

                    <div className="field pronouns-field">
                        <div className="description">
                            <span className="input-name">Pronouns</span>
                            <span className="input-limit">{wordCountPronouns} / 35</span>
                        </div>
                        <input
                            maxLength={35}
                            placeholder="e.g. - he / him"
                            onChange={(e) => {
                                setWordCountPronouns(e.target.value.length);
                                setPronounsField(e.target.value);
                                removeFieldError('pronouns');
                            }}
                            value={pronounsField}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminEditProfileForm;
