import React from "react";
import { distanceInWordsToNow } from "date-fns";
import Img from "react-image";
import Loader from "./Loader";

const NewsCard = ({ item }) => {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer">
      <li className="card rounded overflow-hidden shadow-lg mb-4">
        <Img
          className="w-full rounded-top"
          src={item.urlToImage}
          loader={<Loader />}
          alt={item.title}
        />

        <h2 className="byline text-sm font-semibold text-gray-700 px-6 pt-6">
          {item.source.name}
        </h2>

        <div className="px-6 pb-4">
          <h1 className="font-bold text-xl mb-2">{item.title}</h1>
          <p className="text-gray-700 text-base tracking-tighter">{item.content}...</p>
        </div>
        <div className="px-6 py-4">
          <h2 className="date text-sm font-semibold">
            {distanceInWordsToNow(item.publishedAt, { includeSeconds: true })}{" "}
            ago
          </h2>
        </div>
      </li>
    </a>
  );
};

export default NewsCard;
