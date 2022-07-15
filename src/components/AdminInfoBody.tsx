import '../styles/AdminInfoBody.scss';

interface AdminInfoBodyProperties {
    handle: string;
    bio: string;
    pronouns: string;
}

const AdminInfoBody = ({ handle, bio, pronouns }: AdminInfoBodyProperties) => {
    return (
        <div className="admin-info-body">
            <div className="bio section">
                <pre>
                    {handle} <span>/</span> Bio
                </pre>
                <p>{bio}</p>
            </div>

            <div className="pronouns section">
                <pre>
                    {handle} <span>/</span> Pronouns
                </pre>
                <div className="pronouns-content">
                    {[...pronouns.split('/')].map((pronoun) => {
                        return <p>{pronoun}</p>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default AdminInfoBody;
