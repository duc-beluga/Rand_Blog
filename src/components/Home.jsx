import React, { Component } from "react";
import Logo from "../images/cat.png";

function Home() {
  return (
    <div>
      <header>
        <img src={Logo} alt="" className="logo" width={200} height={200} />
        <img src={Logo} alt="" className="logo" width={200} height={200} />
        <img src={Logo} alt="" className="logo" width={200} height={200} />
        <img src={Logo} alt="" className="logo" width={200} height={200} />
        <img src={Logo} alt="" className="logo" width={200} height={200} />
        <img src={Logo} alt="" className="logo" width={200} height={200} />
        <img src={Logo} alt="" className="logo" width={200} height={200} />
      </header>
      <p className="home-description">
        Hi! I'm a Full-Stack Developer.
        <br />
        It's great to meet you. Hope you enjoy your stay.
      </p>
    </div>
  );
}

export default Home;
