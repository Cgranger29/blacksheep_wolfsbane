import React from "react";
import "./Gif.css";
// import gif from "../../gif/explore.gif";

const Gif = props => <img src={props.vid} alt="Gif" className={props.cName} />;

export default Gif;
