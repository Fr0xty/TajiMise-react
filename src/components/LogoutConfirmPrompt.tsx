import '../styles/LogoutConfirmPrompt.scss';

/**
 * append 'show' className to .logout-confirm-prompt to show
 */
const LogoutConfirmPrompt = () => {
    const closePrompt = () => {
        document.querySelector('.logout-confirm-prompt')?.classList.remove('show');
    };

    const logoutClicked = async () => {
        const req = await fetch('/api/auth/reset-session', {
            method: 'post',
        });
        window.location.replace(req.url); // redirect
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

                    <button className="logout-btn" onClick={logoutClicked}>
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutConfirmPrompt;
