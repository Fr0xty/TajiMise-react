import '../styles/LocaleSelector.scss';

import languageIcon from '../assets/images/language_icon.png';
import { useEffect, useState } from 'react';

const LocaleSelector = () => {
    const [localeSelectPromptOpen, setLoaleSelectPromptOpen] = useState(false);

    useEffect(() => {}, [localeSelectPromptOpen]);

    return (
        <div className="locale-selector no-select">
            <img
                src={languageIcon}
                alt="select locale"
                onClick={() => setLoaleSelectPromptOpen(!localeSelectPromptOpen)}
            />

            {localeSelectPromptOpen && (
                <div className="locale-select-prompt">
                    <div className="wrapper">
                        <div className="header">Select a language:</div>
                        <div className="selection">English</div>
                        <div className="selection">简体中文</div>
                        <div className="selection">繁體中文</div>
                        <div className="selection">日本語</div>

                        <div className="top-left-border"></div>
                        <div className="bottom-right-border"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LocaleSelector;
