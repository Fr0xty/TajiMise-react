import '../styles/LogoutConfirmPrompt.scss';

interface LogoutConfirmPromptProperties {
    show: boolean;
}

const LogoutConfirmPrompt = ({ show }: LogoutConfirmPromptProperties) => {
    return <div className={`logout-confirm-prompt ${show ? 'show' : ''}`}></div>;
};

export default LogoutConfirmPrompt;
