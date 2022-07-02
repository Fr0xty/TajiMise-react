import '../styles/AdminProductNav.scss';

const AdminProductNav = () => {
    return (
        <div className="admin-product-add">
            <div className="sell-box">
                <button>Sell</button>
            </div>
            <div className="orders-box">
                <button>Orders</button>
            </div>
        </div>
    );
};

export default AdminProductNav;
