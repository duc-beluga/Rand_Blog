import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReactComponent as ContactIcon } from "./icons/contact.svg";
import { ReactComponent as DownChevronIcon } from "./icons/down_chevron.svg";
import { ReactComponent as BlogIcon } from "./icons/blog.svg";
import { ReactComponent as SunIcon } from "./icons/sun.svg";
import { ReactComponent as MoonnIcon } from "./icons/moon.svg";
import Navbar from "./components/NavBar";
import NavItem from "./components/NavItem";
import DropdownMenu from "./components/DropdownMenu";
import Home from "./components/Home";
import NavSearch from "./components/NavSearch";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Navbar>
        <a className="header" href="/">
          Duc Viet Nguyen
        </a>
        <NavSearch />
        <NavItem icon={<SunIcon />} link="blog" />
        <NavItem icon={<MoonnIcon />} link="blog" />
        <NavItem icon={<ContactIcon />} link="contact" />
        <NavItem icon={<BlogIcon />} link="blog" />
        <NavItem icon={<DownChevronIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
