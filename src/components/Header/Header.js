import React from "react";
import "./Header.css";
import Pic from "../Pic/Pic";

const Header = props => (
  <div className="page_header">
    <img
      src={props.header_image}
      alt="Main_Title"
      className="header_background"
    />
  </div>
);

export default Header;
