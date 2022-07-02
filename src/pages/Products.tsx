import { useEffect, useState } from 'react';
import AccountBar from '../components/AccountBar';
import AdminProductNav from '../components/AdminProductNav';
import Navbar from '../components/Navbar';
import ProductSelect from '../components/ProductSelect';

const Products = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        (async () => {
            if (!document.cookie.includes('logged_in=')) return;

            const isAdminReq = await fetch('/api/resource/is-admin');
            if (isAdminReq.status !== 200) return;

            const isAdminResult = await isAdminReq.text();
            if (isAdminResult === 'true') setIsAdmin(true);
        })();
    });

    return (
        <div className="products no-select">
            <Navbar currentPage="products" noAccountNavs />
            <AccountBar />
            {isAdmin && <AdminProductNav />}
            <ProductSelect />
        </div>
    );
};

export default Products;
