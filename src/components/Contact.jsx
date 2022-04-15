import React, { Component } from "react";
import NavItem from "./NavItem";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../icons/github.svg";
import { ReactComponent as FacebookIcon } from "../icons/facebook.svg";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-header">Contact me</h1>
      <a className="button" href="mailto:dnguyen416@gatech.edu">
        dnguyen416@gatech.edu
      </a>
      <div className="social-media-links">
        <NavItem
          icon={<LinkedInIcon />}
          link="https://www.linkedin.com/in/ducng416/"
        />
        <NavItem
          icon={<GithubIcon />}
          link="https://github.gatech.edu/dnguyen416"
        />
        <NavItem
          icon={<FacebookIcon />}
          link="https://www.facebook.com/oagEomustI/"
        />
      </div>
    </div>
  );
}

export default Contact;
