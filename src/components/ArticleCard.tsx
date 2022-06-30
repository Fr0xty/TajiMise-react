import '../styles/ArticleCard.scss';

interface ArticleCardProperties {
    thumbnailURL: string;
    title: string;
}

const ArticleCard = ({ thumbnailURL, title }: ArticleCardProperties) => {
    return (
        <div className="article-card">
            <img src={thumbnailURL} alt="article thumbnail" />
            <div className="content">
                <h3>{title}</h3>
                <div className="metadata">
                    <div className="author">
                        <img
                            className="author-avatar"
                            src="https://images-ext-1.discordapp.net/external/99HFBpoZLpobjdluaQno7qlmO_ylJChEhPgjchgnYYM/%3Fv%3D4%3Fs%3D400/https/avatars.githubusercontent.com/u/86002969"
                            alt="author avatar"
                        />
                        <h4>{'Fr0xty'}</h4>
                    </div>
                    <span>{}</span>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
