import React from "react";
import classes from "./LeftSectionContainer.module.css";

const leftSectionContainer = React.forwardRef((props, ref) => (
  <div
    className={`${classes.LeftSectionContainer} ${props.stylename}`}
    ref={ref}
  >
    {props.children}
  </div>
));

export default leftSectionContainer;
