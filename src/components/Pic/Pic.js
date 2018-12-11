import React from "react";
import "./Pic.css";

const Pic = props => <img src={props.pic} alt="RIP" className={props.cName} />;

export default Pic;
