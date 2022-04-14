import React from "react";
import "./index.css";
import { ReactComponent as AboutIcon } from "./icons/about.svg";
import { ReactComponent as Contact } from "./icons/contact.svg";
import { ReactComponent as Resume } from "./icons/resume.svg";
import PDF from "./DucNguyen_Resume_SWE.pdf";

function App() {
  return (
    <Navbar>
      <NavItem icon={<AboutIcon />} />
      <NavItem icon={<Contact />} />
      <NavItem icon={<Resume />} link={PDF} />
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <a href={props.link} target="_blank" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
}

export default App;
