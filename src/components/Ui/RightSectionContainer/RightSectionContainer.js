import React from "react";
import classes from "./RightSectionContainer.module.css";

const rightSectionContainer = React.forwardRef((props, ref) => (
  <div className={classes.RightSectionContainer} ref={ref}>
    {props.children}
  </div>
));

export default rightSectionContainer;
