import React from "react";
import classes from "./Button.module.css";

const button = React.forwardRef((props, ref) => {
  return (
    <div className={classes.Button} ref={ref}>
      <button>{props.children}</button>
    </div>
  );
});

export default button;
