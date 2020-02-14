import React from "react";
import LazyLoad from "react-lazyload";

import { useAsyncCombineSeq, useAsyncRun } from "react-hooks-async";
import { useAsyncTaskDelay } from "react-hooks-async/dist/use-async-task-delay";
import { useAsyncTaskFetch } from "react-hooks-async/dist/use-async-task-fetch";

import NewsCard from "./NewsCard";
import Loader from "./Loader";

const Err = ({ error }) => (
  <div>
    Error:{error.name} {error.message}
  </div>
);
//const Loading = ({ abort }) => <div>Loading...<button onClick={abort}>Abort</button></div>;
//const Loading = ({ abort }) => <div>Loading...</div>;
const envAPIKey = process.env.REACT_APP_NEWS_API_KEY;
const newsapiURL = process.env.REACT_APP_NEWS_API_URL;

const NewsController = ({ query, country }) => {
  const url =
    `${newsapiURL}` +
    `country=${country}&category=${query}&` +
    `apiKey=${envAPIKey}`;

  const delayTask = useAsyncTaskDelay(500, [query]);
  const fetchTask = useAsyncTaskFetch(url);
  const combinedTask = useAsyncCombineSeq(delayTask, fetchTask);
  useAsyncRun(combinedTask);
  if (delayTask.pending) return <div className="flex items-center justify-center h-screen">Waiting...</div>;
  if (fetchTask.error) return <Err error={fetchTask.error} />;
  if (fetchTask.pending) return <div className="flex items-center justify-center h-screen"><Loader abort={fetchTask.abort} width="200" /></div>
  if (!fetchTask.result) return <div>No result</div>;
  return (
    <ul className="articleList p-4 lg:px-20 lg:pt-20">
      {fetchTask.result.articles.map((item) => (
        <LazyLoad height={200} key={item.title} offset={[-200, 0]} once>
          <NewsCard item={item} />
        </LazyLoad>
      ))}
    </ul>
  );
};

export default NewsController;
