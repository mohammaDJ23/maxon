import React from "react";
import classes from "./SubHeadText.module.css";

const subHeadText = (props) => (
  <h3 className={`${classes.SubHeadText} ${props.stylename}`}>
    {props.children}
  </h3>
);

export default subHeadText;
