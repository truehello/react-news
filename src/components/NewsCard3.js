
import React from 'react';
import { distanceInWordsToNow } from 'date-fns';


//function NewsCard3(data, isLoading, isError) {
const  NewsCard3 = (props) => {


//const articlesData = this.props.isLoading;
//console.log("data ="+articlesData);

return (
{/* <>

    {isError && <div>Something went wrong ...</div>}

    {isLoading ? (
        <div>Loading ...</div>
        ) : (

    <ul className="articleList">
    {data.articles.map((item,index) => (
        <li className="card" key={index}>
        <div className="card-left">
            <h1>{item.title}</h1>
            <h2 className="byline">{item.source.name}</h2>
            <h2 className="byline date">{distanceInWordsToNow(item.publishedAt,{includeSeconds: true})} ago</h2>

            <p>{item.content}...</p>
        </div>

        <div className="card-right">
            <img src={item.urlToImage} alt={item.title} />

        </div>
        </li>

    ))}

    </ul>

    )}

</> */}
);
}

export default NewsCard3;


 