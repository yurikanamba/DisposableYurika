import React from "react";

//import all images
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(
  require.context("../imgs", false, /\.(png|jpe?g|svg)$/)
);

export default function AllPhotos(props) {
  return (
    <>
      <div className={"gallery"}>
        {images.map((url, index) => {
          return (
            <img
              key={index}
              src={url}
              className={"gallery-image"}
              onClick={() => {
                props.setView("singlePhoto");
              }}
            ></img>
          );
        })}
      </div>
    </>
  );
}
