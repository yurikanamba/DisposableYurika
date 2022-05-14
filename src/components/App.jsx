import React, { useState, useRef, useEffect } from "react";
import AllPhotos from "./AllPhotos.jsx";
import Sidebar from "./Sidebar.jsx";
import SinglePhoto from "./SinglePhoto";
import "../styles/styles.css";
import axios from "axios";

export default function App() {
  const [view, setView] = useState("allPhotos");
  const [sidebar, setSidebar] = useState("sidebar");
  const [imagePublicId, setImagePublicId] = useState();
  const [imagePublicIds, setImagePublicIds] = useState([]);

  const navBars = useRef();
  const navTimes = useRef();

  useEffect(() => {
    axios
      .get("https://res.cloudinary.com/dgzyroejc/image/list/browser-upload.json")
      .then((res) => {
        const data = res.data.resources;
        const publicIds = data.map((imageData) => imageData.public_id);
        setImagePublicIds(publicIds);
        return publicIds;
      });
  }, []);

  return (
    <>
      <body>
        <div className={"mobile-nav"}>
          <button className={"toggle"}>
            <i
              ref={navBars}
              className={"fa fa-bars"}
              onClick={() => {
                //we want the sidebar to show by adding the active class to it
                setSidebar("active");
                navTimes.current.style.display = "block";
                navTimes.current.style.backgroundColor = "white";
                navTimes.current.style.padding = "20px 10px";
                navTimes.current.style.position = "absolute";
                navTimes.current.style.top = "30vh";
                navTimes.current.style.left = "40vw";
              }}
            ></i>
            <i
              className={"fa fa-times"}
              ref={navTimes}
              onClick={() => {
                setSidebar("sidebar");
                navBars.current.style.display = "block";
                navTimes.current.style.display = "none";
              }}
            ></i>
          </button>
          <a href="./App.jsx">
            <h1>Disposable.Yurika</h1>
          </a>
        </div>
        <div className={"container"}>
          <Sidebar sidebar={sidebar} />
          <AllPhotos
            setView={setView}
            setImagePublicId={setImagePublicId}
            imagePublicIds={imagePublicIds}
          />
        </div>
        {view === "singlePhoto" && (
          <div className={"modal"}>
            <SinglePhoto
              setView={setView}
              setImagePublicId={setImagePublicId}
              imagePublicIds={imagePublicIds}
              imagePublicId={imagePublicId}
            />
          </div>
        )}
      </body>
    </>
  );
}
