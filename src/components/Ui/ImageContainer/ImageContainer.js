import React from "react";
import classes from "./ImageContainer.module.css";

const imageContainer = (props) => (
  <div className={`${classes.ImageContainer} ${props.stylename}`}>
    {props.children}
  </div>
);

export default imageContainer;
