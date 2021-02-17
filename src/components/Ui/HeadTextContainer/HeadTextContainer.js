import React from "react";
import classes from "./HeadTextContainer.module.css";

const headTextContainer = React.forwardRef((props, ref) => (
  <div className={`${classes.Content} ${props.stylename}`}>
    <div ref={ref}>{props.children}</div>
  </div>
));

export default headTextContainer;
