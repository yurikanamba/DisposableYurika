import React, { useState, useRef } from "react";
import AllPhotos from "./AllPhotos.jsx";
import Sidebar from "./Sidebar.jsx";
import SinglePhoto from "./SinglePhoto";
import "../styles/styles.css";

//import all images
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(
  require.context("../imgs", false, /\.(png|jpe?g|svg)$/)
);

export default function App() {
  const [view, setView] = useState("allPhotos");
  const [sidebar, setSidebar] = useState("sidebar");
  const [photoURL, setPhotoUrl] = useState();

  const navBars = useRef();
  const navTimes = useRef();

  if (view === "allPhotos") {
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
              setPhotoUrl={setPhotoUrl}
              images={images}
            />
          </div>
        </body>
      </>
    );
  }
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
          <SinglePhoto
            setView={setView}
            photoURL={photoURL}
            images={images}
            setPhotoUrl={setPhotoUrl}
          />
        </div>
      </body>
    </>
  );
}
