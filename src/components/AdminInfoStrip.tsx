import '../styles/AdminInfoStrip.scss';

interface AdminInfoStripProperties {
    avatarURL: string;
    name: string;
    handle: string;
    position: string;
}

const AdminInfoStrip = ({ avatarURL, name, handle, position }: AdminInfoStripProperties) => {
    return (
        <div className="admin-info-strip">
            <img className="avatar" src={avatarURL} alt={`${handle}'s avatar`} />
            <h2 className="admin-name">{name}</h2>
            <h2 className="admin-handle">{`@${handle}`}</h2>
            <h3 className="admin-position">{position}</h3>
        </div>
    );
};

export default AdminInfoStrip;
