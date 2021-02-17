import React from "react";
import classes from "./HeadTextBold.module.css";

const button = (props) => (
  <div className={`${classes.HeadTextBold} ${props.stylename}`}>
    <h2>{props.children}</h2>
  </div>
);

export default button;
