import React from "react";
import classes from "./OrangeText.module.css";

const orangeText = React.forwardRef((props, ref) => (
  <div className={`${classes.OrangeText} ${props.stylename}`} ref={ref}>
    <p>{props.children}</p>
  </div>
));

export default orangeText;
