import '../styles/BreifAbout.scss';

import AdminCard from './AdminCard';

import { useEffect, useState } from 'react';
import { AdminInfo } from 'tajimise';
import { useTranslation } from 'react-i18next';

const BreifAbout = () => {
    const { t } = useTranslation();

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
            <h1 className="home-main-header">{t('breif_about_header')}</h1>

            <div className="cards-wrapper">
                <div className="cards">
                    {adminInfo.map((admin, i) => {
                        return (
                            <AdminCard
                                key={i}
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
