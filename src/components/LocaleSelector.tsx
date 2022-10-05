import '../styles/LocaleSelector.scss';

import languageIcon from '../assets/images/language_icon.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LocaleSelector = () => {
    const [localeSelectPromptOpen, setLoaleSelectPromptOpen] = useState(false);
    const { i18n } = useTranslation();

    /**
     * called when user select a language from the menu
     */
    const localeSelectionClicked = async (e: React.MouseEvent<HTMLDivElement>) => {
        /**
         * get ISO standard language code from element's id attribute
         */
        const languageCode = (e.target as HTMLDivElement).id;

        /**
         * request server to set cookie
         */
        await fetch(`/api/locale/set?language-code=${languageCode}`, {
            method: 'post',
        });

        /**
         * update language without the need of reloading window
         */
        i18n.changeLanguage(languageCode.replace('-', '_'));

        /**
         * close language select window
         */
        setLoaleSelectPromptOpen(false);
    };

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
                        <div id="en" className="selection" onClick={localeSelectionClicked}>
                            English
                        </div>
                        <div id="zh-cn" className="selection" onClick={localeSelectionClicked}>
                            简体中文
                        </div>
                        <div id="zh-tw" className="selection" onClick={localeSelectionClicked}>
                            繁體中文
                        </div>
                        <div id="ja" className="selection" onClick={localeSelectionClicked}>
                            日本語
                        </div>

                        <div className="top-left-border"></div>
                        <div className="bottom-right-border"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LocaleSelector;
