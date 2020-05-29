import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import axios from "axios";

import NewsCard from "./NewsCard";

const Err = ({ error }) => (
  <div>
    Error:{error.name} {error.message}
  </div>
);

//const envAPIKey = process.env.REACT_APP_NEWS_API_KEY;
//const newsapiURL = process.env.REACT_APP_NEWS_API_URL;

const NewsController = ({ query, country }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({ articles: [] });

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        // const result = await axios(
        //   `${newsapiURL}` +
        //     `country=${country}&category=${query}&` +
        //     `apiKey=${envAPIKey}`
        // );
        const result = await axios(
          `https://extraextra.netlify.app/.netlify/functions/news?` +
            `country=${country}&category=${query}`
        );

        setData(result.data.detail);
      
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [query, country]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        Waiting...
      </div>
    );
  if (isError) return <Err error={isError} />;
  if (!data) return <div className="flex items-center justify-center h-screen">No result</div>;
  //console.log("hello 2 "+JSON.stringify(data))
  return (
    <ul className="articleList p-4 lg:px-20 lg:pt-20">
      {/* {JSON.stringify(data)} */}
      {data.articles.map((item) => (
        <LazyLoad height={200} key={item.title} offset={[-200, 0]} once>
          <NewsCard item={item} />
        </LazyLoad>
      ))}
    </ul>
  );
};

export default NewsController;
