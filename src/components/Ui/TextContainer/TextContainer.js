import React from "react";
import classes from "./TextContainer.module.css";

const textContainer = React.forwardRef((props, ref) => (
  <div className={`${classes.TextContainer} ${props.stylename}`}>
    <div ref={ref}>{props.children}</div>
  </div>
));

export default textContainer;
