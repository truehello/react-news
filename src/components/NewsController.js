import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import axios from "axios";
//import { useAsyncCombineSeq, useAsyncRun } from "react-hooks-async";
//import { useAsyncTaskDelay } from "react-hooks-async/dist/use-async-task-delay";
//import { useAsyncTaskFetch } from "react-hooks-async/dist/use-async-task-fetch";
//import useDataApi from 'use-data-api';

import NewsCard from "./NewsCard";
//import Loader from "./Loader";

const Err = ({ error }) => (
  <div>
    Error:{error.name} {error.message}
  </div>
);

const envAPIKey = process.env.REACT_APP_NEWS_API_KEY;
const newsapiURL = process.env.REACT_APP_NEWS_API_URL;

const NewsController = ({ query, country }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({ articles: [] });

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(
          `${newsapiURL}` +
            `country=${country}&category=${query}&` +
            `apiKey=${envAPIKey}`
        );

        setData(result.data);
      
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
  if (!data) return <div>No result</div>;
  //console.log(data)
  return (
    <ul className="articleList p-4 lg:px-20 lg:pt-20">
      {data.articles.map((item) => (
        <LazyLoad height={200} key={item.title} offset={[-200, 0]} once>
          <NewsCard item={item} />
        </LazyLoad>
      ))}
    </ul>
  );
};

export default NewsController;
