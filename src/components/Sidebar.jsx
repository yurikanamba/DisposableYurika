import React from "react";

export default function Sidebar(props) {
  if (props.sidebar === "sidebar") {
    return (
      <>
        <div className={"sidebar"}>
          <div className={"header"}>
            <a href="./App.jsx">
              <h1>
                Disposable.
                <br />
                Yurika
              </h1>
            </a>
            <p>
              All photos were taken by Yurika and developed using a disposable
              camera.
            </p>
            <p>Contact me if you want a copy.</p>
          </div>
          <div className={"footer"}>
            <div className={"social-links"}>
              <a
                className="fa-icon"
                href="https://www.instagram.com/nurikayamba/"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a className="fa-icon" href="https://twitter.com/NambaYurika">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="fa-icon" href="mailto: yurikanamba@gmail.com">
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
            <p>© 2020 Yurika Namba</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={"active"}>
        <div className={"header"}>
          <p>
            All photos were taken by Yurika and developed using a disposable
            camera.{" "}
          </p>
          <p>Contact me if you want a copy.</p>
        </div>
        <div className={"footer"}>
          <div className={"social-links"}>
            <a
              className="fa-icon"
              href="https://www.instagram.com/nurikayamba/"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a className="fa-icon" href="https://twitter.com/NambaYurika">
              <i className="fa fa-twitter"></i>
            </a>
            <a className="fa-icon" href="mailto: yurikanamba@gmail.com">
              <i className="fa fa-envelope-o"></i>
            </a>
          </div>
          <p>© 2020 Yurika Namba</p>
        </div>
      </div>
    </>
  );
}
