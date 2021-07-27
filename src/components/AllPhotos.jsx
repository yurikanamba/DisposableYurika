import React from "react";
import { Image, Placeholder } from "cloudinary-react";

export default function AllPhotos({
  setView,
  setImagePublicId,
  imagePublicIds,
}) {
  return (
    <>
      <div className={"gallery"}>
        {imagePublicIds.map((id, index) => {
          return (
            <div>
              <div
                onClick={() => {
                  setView("singlePhoto");
                  setImagePublicId(id);
                }}
              >
                <Image
                  key={index}
                  cloudName="dgzyroejc"
                  publicId={id}
                  loading="lazy"
                >
                  <Placeholder type="blur" />
                </Image>
              </div>
            </div>
          );
        })}
      </div>
      )
    </>
  );
}
