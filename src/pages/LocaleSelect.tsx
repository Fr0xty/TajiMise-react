import '../styles/LocaleSelect.scss';

const LocaleSelect = () => {
    const localeSelected = async (e: any) => {
        const langCode = e.target.id;
        const req = await fetch(`/api/locale/set?language-code=${langCode}`, {
            method: 'post',
        });
        console.log(await req.text());
    };

    return (
        <div className="locale-select no-select">
            <div className="background" />
            <div className="prompt">
                <h2>Select Language</h2>
                <div className="selections">
                    <button id="en" onClick={localeSelected}>
                        English
                    </button>
                    <button id="zh-cn" onClick={localeSelected}>
                        简体中文
                    </button>
                    <button id="zh-tw" onClick={localeSelected}>
                        繁体中文
                    </button>
                    <button id="ja" onClick={localeSelected}>
                        日本語
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocaleSelect;
