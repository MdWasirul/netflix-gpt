import React from "react";
import { POSTER_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-48 pr-4 ">
      <img className="" alt="Movie Card" src={POSTER_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
