import React from "react";
import classes from "./PallidText.module.css";

const pallidText = React.forwardRef((props, ref) => (
  <div className={`${classes.PallidText} ${props.stylename}`} ref={ref}>
    <p>{props.children}</p>
  </div>
));

export default pallidText;
