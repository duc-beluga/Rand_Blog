import React from "react";
import "./index.css";
import { useState, useEffect, useRef } from "react";
import DropdownMenu from "./DropdownMenu";

function DropdownItem(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      className="menu-item"
      onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
    >
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
}

export default DropdownItem;
