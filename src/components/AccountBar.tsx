import '../styles/AccountBar.scss';

import userIcon from '../assets/images/user_icon.svg';
import cartIcon from '../assets/images/cart_icon.svg';

const AccountBar = () => {
    return (
        <div className="account-bar">
            <a href="/cart">
                <img className="cart-icon selection" src={cartIcon} alt="shopping cart icon" />
            </a>
            <a href="/account">
                <div className="account-navigation selection">
                    <p className="account-name">Fr0xty</p>
                    <img className="avatar-icon" src={userIcon} alt="avatar icon" />
                </div>
            </a>
        </div>
    );
};

export default AccountBar;
