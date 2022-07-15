import '../styles/AdminCard.scss';

import chevronRight from '../assets/images/chevron_right.svg';

interface AdminCardProperties {
    avatar: string;
    name: string;
    position: string;
    pronouns: string;
    description: string;
    handle: string;
    className?: string;
}

const AdminCard = ({ avatar, name, position, pronouns, description, handle, className }: AdminCardProperties) => {
    return (
        <a href={`/admin/${handle}`}>
            <div className={`admin-card ${className}`}>
                <img src={avatar} alt={`${name} avatar`} className="avatar" />
                <div className="description">
                    <h2>{name}</h2>
                    <h3>
                        {position}
                        <span> ・ {pronouns}</span>
                    </h3>
                    <p>{description}</p>
                </div>
                <div className="view-profile-text no-select">
                    <p>View Profile</p>
                    <img src={chevronRight} alt="arrow" />
                </div>
            </div>
        </a>
    );
};

export default AdminCard;
