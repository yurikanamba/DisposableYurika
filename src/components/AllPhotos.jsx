import React from "react";

export default function AllPhotos({ setView, setPhotoUrl, images }) {
  return (
    <>
      <div className={"gallery"}>
        {images.map((url, index) => {
          return (
            <img
              id={index}
              key={index}
              src={url}
              className={"gallery-image"}
              onClick={() => {
                setView("singlePhoto");
                setPhotoUrl(url);
              }}
            ></img>
          );
        })}
      </div>
    </>
  );
}
