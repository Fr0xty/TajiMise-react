import '../styles/LogoutConfirmPrompt.scss';

interface LogoutConfirmPromptProperties {
    show: boolean;
}

const LogoutConfirmPrompt = ({ show }: LogoutConfirmPromptProperties) => {
    return (
        <div className={`logout-confirm-prompt ${show ? 'show' : ''}`}>
            <div className="message-box">
                <h2>Log Out</h2>
                <p>Are you sure you want to logout?</p>
                <div className="buttons">
                    <button className="cancel-btn">Cancel</button>
                    <button className="logout-btn">Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default LogoutConfirmPrompt;
