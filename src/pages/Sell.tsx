import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const Sell = () => {
    useEffect(() => {
        (async () => {
            /**
             * redirect to /products if user is not admin
             */
            if (!document.cookie.includes('logged_in=')) return (document.location.href = '/products');

            const isAdminReq = await fetch('/api/resource/is-admin');
            if (isAdminReq.status !== 200) return;

            const isAdmin = await isAdminReq.text();
            if (isAdmin === 'false') document.location.href = '/products';
        })();
    }, []);

    return (
        <div className="sell">
            <Navbar />
        </div>
    );
};

export default Sell;
