import '../styles/LogoutConfirmPrompt.scss';

/**
 * append 'show' className to .logout-confirm-prompt to show
 */
const LogoutConfirmPrompt = () => {
    const closePrompt = () => {
        document.querySelector('.logout-confirm-prompt')?.classList.remove('show');
    };

    return (
        <div className={`logout-confirm-prompt no-select`}>
            <div className="background" onClick={closePrompt} />
            <div className="message-box">
                <h2>Log Out</h2>
                <p>Are you sure you want to logout?</p>
                <div className="buttons">
                    <button className="cancel-btn" onClick={closePrompt}>
                        Cancel
                    </button>
                    <a href="/api/auth/reset-session">
                        <button className="logout-btn">Log Out</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LogoutConfirmPrompt;
