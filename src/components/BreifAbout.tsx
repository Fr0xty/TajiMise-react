import '../styles/BreifAbout.scss';

import tameijiAvatar from '../assets/images/tameiji_avatar.webp';
import fr0xtyAvatar from '../assets/images/fr0xty_avatar.webp';
import capirinAvatar from '../assets/images/capirin_avatar.webp';
import arataAvatar from '../assets/images/arata_avatar.webp';
import AdminCard from './AdminCard';

import { useEffect, useState } from 'react';
import { AdminInfo } from 'tajimise';

const BreifAbout = () => {
    const [adminInfo, setAdminInfo] = useState<AdminInfo[]>([
        {
            avatar: 'loading..',
            position_description: 'loading',
            position: 'loading..',
            name: 'loading..',
            pronouns: 'loading..',
            handle: 'loading',
            bio: '',
            socials: {},
        },
    ]);

    useEffect(() => {
        (async () => {
            const adminInfoReq = await fetch('/api/resource/admin-info');
            if (adminInfoReq.status !== 200) return;

            setAdminInfo(await adminInfoReq.json());
        })();
    }, []);
    return (
        <div className="breif-about">
            <h1 className="home-main-header">Who run TajiMisé?</h1>

            <div className="cards-wrapper">
                <div className="cards">
                    {adminInfo.map((admin) => {
                        return (
                            <AdminCard
                                avatar={admin.avatar}
                                description={admin.position_description}
                                name={admin.name}
                                position={admin.position}
                                pronouns={admin.pronouns}
                                handle={admin.handle}
                                className={`${admin.handle}-card`}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BreifAbout;
