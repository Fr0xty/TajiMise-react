import '../styles/Account.scss';

import UserInfo from '../components/UserInfo';

const Account = () => {
    return (
        <div className="account">
            <div className="content-wrapper">
                <UserInfo />
                <div className="buttons no-select">
                    <button className="home-btn">Go to Home</button>
                    <button className="logout-btn">Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Account;
