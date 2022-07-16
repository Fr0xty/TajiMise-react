import '../styles/AdminInfoStrip.scss';

interface AdminInfoStripProperties {
    avatarURL: string;
    name: string;
    handle: string;
    position: string;
}

const AdminInfoStrip = ({ avatarURL, name, handle, position }: AdminInfoStripProperties) => {
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
            </div>
        </div>
    );
};

export default AdminInfoStrip;
