import React from "react";
import classes from "./ContentContainer.module.css";

const contentContainer = React.forwardRef((props, ref) => {
  return (
    <div className={`${classes.ContentContainer} ${props.stylename}`} ref={ref}>
      {props.children}
    </div>
  );
});

export default contentContainer;
