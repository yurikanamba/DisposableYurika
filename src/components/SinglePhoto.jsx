import React from "react";

function SinglePhoto({ setView, setPhotoUrl, photoURL, images }) {
  console.log(photoURL);
  return (
    <div className={"dark-window"}>
      <div
        id="close-btn"
        onClick={() => {
          setView("allPhotos");
        }}
      >
        ✖
      </div>
      <div
        id="back-btn"
        onClick={() => {
          let desiredIndex =
            images.indexOf(photoURL) === 0
              ? images.length - 1
              : images.indexOf(photoURL) - 1;

          setPhotoUrl(images[desiredIndex]);
        }}
      >
        ◀
      </div>
      <div className={"photo-container"}>
        <img src={photoURL}></img>
      </div>
      <div
        id="next-btn"
        onClick={() => {
          let desiredIndex =
            images.indexOf(photoURL) === images.length - 1
              ? 0
              : images.indexOf(photoURL) + 1;

          setPhotoUrl(images[desiredIndex]);
        }}
      >
        ▶
      </div>
    </div>
  );
}

export default SinglePhoto;
