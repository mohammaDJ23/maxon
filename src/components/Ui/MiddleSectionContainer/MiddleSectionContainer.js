import React from "react";
import classes from "./MiddleSectionContainer.module.css";

const middleSectionContainer = (props) => (
  <div className={`${classes.MiddleSectionContainer} ${props.stylename}`}>
    {props.children}
  </div>
);

export default middleSectionContainer;
