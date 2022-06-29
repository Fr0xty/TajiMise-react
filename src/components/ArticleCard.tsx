interface ArticleCardProperties {
    thumbnailURL: string;
}

const ArticleCard = ({ thumbnailURL }: ArticleCardProperties) => {
    return (
        <div className="article-card">
            <img src={thumbnailURL} alt="article thumbnail" />
        </div>
    );
};

export default ArticleCard;
