import '../styles/LoginOptions.scss';
import LoginSelection from '../components/LoginSelection';
import Navbar from '../components/Navbar';

const LoginOptions = () => {
    return (
        <div className="login-options no-select">
            <Navbar />
            <h1>Choose a Method:</h1>

            <div className="method-selection">
                <LoginSelection method="discord" />
                <LoginSelection method="google" />
            </div>
        </div>
    );
};

export default LoginOptions;
