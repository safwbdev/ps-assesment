import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ images }) => {
  return (
    <div>
      {images &&
        images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image.largeImageURL} alt={image.tags} />
              <Link to={{ pathname: `/image/${image.id}`, state: { image } }}>
                BUTTON
              </Link>
            </div>
          );
        })}
    </div>
  );
};
export default SearchResults;
