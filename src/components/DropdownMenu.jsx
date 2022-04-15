import React from "react";
import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as AboutIcon } from "../icons/about.svg";
import { ReactComponent as Resume } from "../icons/resume.svg";
import { ReactComponent as RightChevronIcon } from "../icons/right_chevron.svg";
import { ReactComponent as LeftChevronIcon } from "../icons/left_chevron.svg";
import PDF from "../documents/DucNguyen_Resume_SWE.pdf";
import "../index.css";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<AboutIcon />}>About Me</DropdownItem>
          <DropdownItem leftIcon={<RightChevronIcon />} goToMenu="settings">
            Documents
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<LeftChevronIcon />}>
            Return
          </DropdownItem>
          <DropdownItem leftIcon={<Resume />} link={PDF}>
            Resume
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );

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
}

export default DropdownMenu;
