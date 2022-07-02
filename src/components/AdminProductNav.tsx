import '../styles/AdminProductNav.scss';

const AdminProductNav = () => {
    return (
        <div className="admin-product-add">
            <a href="/sell">
                <div className="btn sell-btn">
                    <span>Sell</span>
                </div>
            </a>
            <a href="/orders">
                <div className="btn orders-btn">
                    <span>Orders</span>
                </div>
            </a>
        </div>
    );
};

export default AdminProductNav;
