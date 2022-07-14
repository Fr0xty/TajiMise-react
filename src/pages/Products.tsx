import AccountBar from '../components/AccountBar';
import Navbar from '../components/Navbar';
import ProductSelect from '../components/ProductSelect';

const Products = () => {
    return (
        <div className="products no-select">
            <Navbar currentPage="products" noAccountNavs />
            <AccountBar />
            <ProductSelect />
        </div>
    );
};

export default Products;
