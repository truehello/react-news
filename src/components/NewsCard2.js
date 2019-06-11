
import React, { useState, useEffect } from 'react';
import useDataApi from './useDataApi'
import { distanceInWordsToNow } from 'date-fns';


   function NewsCard2(props) {
  //const NewsCard2 = props => (  
    
    useEffect(() => {
      loadNewsSection();
    }, [props.category]);
  
  
      const initialDataState =  [] 

      const [data, setData] = useState(initialDataState);
      const [isLoading, setIsLoading] = useState(true);
      const [isError, setIsError] = useState(false);
     // const [category, setCategory] = useState(props.category)
     // console.log(category)
      const api = useDataApi("", []);

      
      const loadNewsSection = async () => {

        const newsAPI =
        `https://newsapi.org/v2/top-headlines?` +
        `country=us&category=${props.category}&` +
        `apiKey=3979168c66df45f09c87cf1be9cfb80d`

        try {
          await api.doFetch(newsAPI, {});
          //const json = await data.json()
         
          setData(api.data.articles);
           setIsLoading(api.isLoading);
           setIsError(api.isError)
         //console.log("newsData = "+data) 
         return <div>RemoteData:{JSON.stringify(data)}</div>;

        } catch(e) {
          console.error("Problem", e)
        }
      }
      
      
      
      return (

        <>

            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
                <div>Loading ...</div>
              ) : (
              
              <ul className="articleList">
                {/* <li>{data} hello </li> */}
                {/* {data.map((item,index) => (
                   
                  // <li className="card" key={index}>
                  //   <div className="card-left">
                  //       <h1>{item.title}</h1>
                  //       <h2 className="byline">{item.source.name}</h2>
                  //       <h2 className="byline date">{distanceInWordsToNow(item.publishedAt,{includeSeconds: true})} ago</h2>
            
                  //       <p>{item.content}...</p>
                  //   </div>

                  //   <div className="card-right">
                  //       <img src={item.urlToImage} alt={item.title} />

                  //   </div>
                  // </li>

                ))} */}

              </ul>

          )}

        </>

        
        );
      }

      
      export default NewsCard2;


 