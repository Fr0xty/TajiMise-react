import AccountBar from '../components/AccountBar';
import Navbar from '../components/Navbar';

const Products = () => {
    return (
        <div className="products no-select">
            <Navbar currentPage="products" noAccountNavs />
            <AccountBar />
        </div>
    );
};

export default Products;
