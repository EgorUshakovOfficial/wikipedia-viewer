import {Fragment} from 'react';
import Article from './Article';
export default function Articles({ articles }){
    return (
        <Fragment>
            {articles.length === 0  ?
                <div className="description">No Wikipedia articles found!</div>
                :
                <div id="articles">
                    {articles.map(article => <Article {...article} />)}
                </div>
            }
        </Fragment>
    );
}

