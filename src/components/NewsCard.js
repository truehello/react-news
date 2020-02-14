import React from "react";
import { distanceInWordsToNow } from "date-fns";
import Img from "react-image";
import Loader from "./Loader";
import noImageIcon from '../images/meh-rolling-eyes.svg'
import TextTruncate from "react-text-truncate";

const NewsCard = ({ item }) => {
  //const imgPath = item.urlToImg
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer">
      <li className="card overflow-hidden mb-4 lg:border-b">
      <figure className="relative" style={{ paddingBottom: "83.333333%" }}>
        <Img
          className="absolute h-full w-full object-cover rounded-top"
          src={[item.urlToImage || noImageIcon,{noImageIcon}]}
          loader={<Loader />}
          alt={item.title}
        />
      </figure>
        <h3 className="byline text-xs font-semibold pt-6">
          {item.source.name}
        </h3>

        <article className="pb-4">
          {/* <h1 className="font-bold text-xl mb-2 tracking-tighter">{item.title}</h1> */}
          <TextTruncate
              line={2}
              element="h2"
              truncateText="…"
              text={item.title}
              className="font-bold text-xl mb-2 tracking-tighter"
            />
          {/* <p className="text-gray-700 text-base tracking-tight">{item.content}...</p> */}
          <TextTruncate
              line={5}
              element="p"
              truncateText="…"
              text={item.content}
              className="content-text text-gray-700 tracking-tight"
            />
        </article>
        <div className="py-4 text-right">
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
