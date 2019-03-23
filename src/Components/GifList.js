import React from "react";
import "../App.scss";
const GifList = props => {
  const gifItems = props.gifs.map(g => {
    return (
      <div className="gif">
        <div className="gif-overlay" />
        <img src={g.images.downsized.url} alt="searched gif" />
        <div className="gif-details">
          <h5>{g.title}</h5>
          <a href={g.bitly_url} alt="gif-url" target="_blank">
            {g.bitly_url}
          </a>
        </div>
      </div>
    );
  });

  return <div className="gif-container">{gifItems}</div>;
};
export default GifList;
