import { useEffect, useState } from 'react';
import '../styles/AdminInfoStrip.scss';

interface AdminInfoStripProperties {
    avatarURL: string;
    name: string;
    handle: string;
    position: string;
}

const AdminInfoStrip = ({ avatarURL, name, handle, position }: AdminInfoStripProperties) => {
    const [showEditButton, setShowEditButton] = useState(false);

    useEffect(() => {
        (async () => {
            if (handle === 'loading..') return;
            const isExactAdminReq = await fetch(`/api/resource/is-admin?handle=${handle}`);
            if (isExactAdminReq.status !== 200) return;

            if ((await isExactAdminReq.text()) === 'true') {
                setShowEditButton(true);
            }
        })();
    }, [handle]);

    return (
        <div className="admin-info-strip-wrapper">
            <div className="admin-info-strip">
                <img className="avatar" src={avatarURL} alt={`${handle}'s avatar`} />
                <h2 className="admin-name">{name}</h2>
                <h2 className="admin-handle">{`@${handle}`}</h2>
                <div className="admin-position">
                    {position.split('&').map((pos) => {
                        return <h3>{pos}</h3>;
                    })}
                </div>
                {showEditButton && <button className="edit-profile-button">Edit Profile</button>}
            </div>
        </div>
    );
};

export default AdminInfoStrip;
