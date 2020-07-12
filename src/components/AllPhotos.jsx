import React, { useRef, useState, useEffect } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function AllPhotos({ setView, setPhotoUrl, images, photoURL }) {
  useEffect(() => {
    setPhotoUrl("");
    scroller.scrollTo(photoURL, {
      offset: -70,
    });
  }, []);

  return (
    <>
      <div className={"gallery"}>
        {images.map((url, index) => {
          return (
            <Element name={url} key={index}>
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
            </Element>
          );
        })}
      </div>
    </>
  );
}
