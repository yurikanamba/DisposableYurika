import React from "react";
import { Image } from 'cloudinary-react';

export default function AllPhotos({ setView, setImagePublicId, imagePublicIds }) {
  return (
    <>
      <div className={"gallery"}>
        {imagePublicIds.map((id, index) => {
          return (
            <div className={"placeholder"} >
                <div                     
                  onClick={() => {
                    setView("singlePhoto");
                    setImagePublicId(id);
                  }}>
                <Image
                  key={index}
                  cloudName={"dgzyroejc"}
                  publicId={id}
                />
                </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
