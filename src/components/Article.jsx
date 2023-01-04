export default function Article({title, snippet}){
    return (
        <a href={`https://en.wikipedia.org/wiki/${title.replace(" ", "_")}`} target="_blank">
            <div className="article">
                <h1 className="title" dangerouslySetInnerHTML={{ __html: title}} />
                <div className="description" dangerouslySetInnerHTML={{ __html: snippet }} />
            </div>
        </a>
    )
}