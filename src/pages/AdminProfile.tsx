import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AdminProfile = () => {
    const { adminHandle } = useParams();

    useEffect(() => {}, []);

    return <div className="admin-profile"></div>;
};

export default AdminProfile;
