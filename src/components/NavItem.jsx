import React, { Component } from "react";
import "../index.css";
import { useState } from "react";

class NavItem extends Component {
  state = {
    open: false,
  };

  regFunc = () => {
    console.log("reg");
    this.setState({ open: !this.state.open });
  };

  changeFunc = () => {
    console.log("replaced");
    console.log(this.props.icon.type.render.name == "SvgMoon");
    if (this.props.icon.type.render.name == "SvgMoon") {
      document.body.classList.replace("light", "dark");
    } else {
      document.body.classList.replace("dark", "light");
    }
  };

  render() {
    return (
      <li className="nav-item">
        <a
          href={this.props.link}
          className="icon-button"
          onClick={this.props.onClick ? this.changeFunc : this.regFunc}
        >
          {this.props.icon}
        </a>

        {this.state.open && this.props.children}
      </li>
    );
  }
}

export default NavItem;
