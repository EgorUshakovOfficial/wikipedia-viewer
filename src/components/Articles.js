const Articles = ({ articles }) => {
    if (articles.length === 0) {
        return <div className="description">No Wikipedia articles found!</div>
    }
    return (
        <div id="articles">
            {articles.map(article => {
                return (
                    <a href={`https://en.wikipedia.org/wiki/${article.title.replace(" ", "_")}`} target="_blank">
                        <div className="article">
                            <h1 className="title" dangerouslySetInnerHTML={{ __html: article.title}} />
                            <div className="description" dangerouslySetInnerHTML={{ __html: article.snippet }} />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default Articles; 
