import React, { Component } from "react";
import Logo from "../images/cat.png";
import Computer from "../images/computer.png";

function Home() {
  return (
    <div className="dark">
      <header>
        <img src={Computer} alt="" className="logo" width={200} height={200} />
      </header>
      <p className="home-description">
        Hi! I'm a Full-Stack Developer.
        <br />
        It's great to meet you.
        <br />
        Hope you enjoy your stay.
      </p>
    </div>
  );
}

export default Home;
