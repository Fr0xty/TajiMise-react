import '../styles/BreifNews.scss';
import ArticleCard from './ArticleCard';

const BreifNews = () => {
    return (
        <div className="breif-news">
            <div className="header">
                <span className="home-sub-header">NEWS</span>
                <h1 className="home-main-header">Latest Updates</h1>
            </div>
            <div className="articles">
                <ArticleCard thumbnailURL="" />
            </div>
        </div>
    );
};

export default BreifNews;
