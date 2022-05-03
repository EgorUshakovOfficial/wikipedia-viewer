import { useState } from 'react';
import Articles from './components/Articles';
import './css/app.css';

const App = () => {
    // State 
    const [search, setSearch] = useState("")
    const [articles, setArticles] = useState(false)
    const [loading, setLoading] = useState(false)


    // Handle submit
    const handleSubmit = e => {
        setLoading(true)

        // Prevent form from submitting
        e.preventDefault()

        // Fetch data from wiki api 
        fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${search}&format=json&origin=*`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                 setArticles(data.query.search)
                 setLoading(false)
            })
            .catch(err => console.log(err))

        
    }

    return (
        <div className="app">
            <a href="https://en.wikipedia.org/wiki/Special:Random" id="random-article" target="_blank">Click here for a random article</a>
            <form id="search-form" onSubmit={handleSubmit}>
                <input id="search" onChange={e => setSearch(e.target.value)} value={search} />
                <button type="submit" id="submit">Search</button>
            </form>
            {loading && <div className="spinner-border" role="status">
                <span className="sr-only" />
            </div>}
            {articles && <Articles articles={articles} />}
        </div>
    )
}


export default App; 