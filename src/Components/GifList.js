import React from "react";
import GifItem from "./GifItem";

const GifList = props => {
  const gifItems = props.gifs.map(gifImage => {
    return <GifItem key={gifImage.id} gif={gifImage} />;
  });

  return <div>{gifItems}</div>;
};
export default GifList;
