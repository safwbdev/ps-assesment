import React from "react";
import { Link } from "react-router-dom";
const ImagePage = (props) => {
  console.log(props.location.state.image);
  const {
    // comments,
    // downloads,
    // favorites,
    // id,
    // imageHeight,
    // imageSize,
    // imageWidth,
    largeImageURL,
    // likes,
    pageURL,
    // previewHeight,
    // previewURL,
    // previewWidth,
    tags,
    // type,
    user,
    // userImageURL,
    // user_id,
    // views,
    // webformatHeight,
    // webformatURL,
    // webformatWidth,
  } = props.location.state.image;
  return (
    <div>
      <img src={largeImageURL} alt={tags} />
      <p>&copy; pixabay</p>
      <h4>
        Credit: <span>{user}</span>
      </h4>
      <h4>
        Download:{" "}
        <span>
          <a href={pageURL} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </span>
      </h4>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};
export default ImagePage;
