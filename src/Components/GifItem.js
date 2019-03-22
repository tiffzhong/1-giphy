import React from "react";

const GifItem = images => {
  return <img src={images.gif.images.downsized.url} alt="searched gif" />;
};
export default GifItem;
