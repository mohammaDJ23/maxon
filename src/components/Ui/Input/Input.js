import React from "react";
import classes from "./Input.module.css";

const input = React.forwardRef((props, ref) => {
  const { touch, valid, stylename, clicked, value, elementConfig } = props;
  const classNameArr = [classes.Input];

  if (touch && !valid) {
    classNameArr.push(classes.Invalid);
  }

  return (
    <input
      className={`${classNameArr.join(" ")} ${stylename}`}
      ref={ref}
      onChange={clicked}
      value={value}
      {...elementConfig}
    />
  );
});

export default input;
