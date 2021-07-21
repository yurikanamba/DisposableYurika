import React from "react";
import { Image } from 'cloudinary-react';

function SinglePhoto({ setView, setImagePublicId, imagePublicId, imagePublicIds }) {
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
            imagePublicIds.indexOf(imagePublicId) === 0
              ? imagePublicIds.length - 1
              : imagePublicIds.indexOf(imagePublicId) - 1;

          setImagePublicId(imagePublicIds[desiredIndex]);
        }}
      >
        ◀
      </div>
      <div className={"photo-container"}>
        <Image
          cloudName={"dgzyroejc"}
          publicId={imagePublicId}
        />
      </div>
      <div
        id="next-btn"
        onClick={() => {
          let desiredIndex =
            imagePublicIds.indexOf(imagePublicId) === imagePublicIds.length - 1
              ? 0
              : imagePublicIds.indexOf(imagePublicId) + 1;

          setImagePublicId(imagePublicIds[desiredIndex]);
        }}
      >
        ▶
      </div>
    </div>
  );
}

export default SinglePhoto;
