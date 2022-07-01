interface AdminCartProperties {
    avatar: string;
    name: string;
    position: string;
    pronouns: string;
    description: string;
    classNames?: string;
}

const AdminCart = ({ avatar, name, position, pronouns, description, classNames }: AdminCartProperties) => {
    return (
        <div className={`admin-card ${classNames}`}>
            <img src={avatar} alt={`${name} avatar`} />
            <div className="description">
                <h2>{name}</h2>
                <h3>
                    {position}
                    <span> ・ {pronouns}</span>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AdminCart;
