import '../styles/ProductCard.scss';

interface ProductCardProperties {
    title: string;
    price: string;
    imageURL: string;
}

const ProductCard = ({ title, price, imageURL }: ProductCardProperties) => {
    return <div className="product-card"></div>;
};

export default ProductCard;
