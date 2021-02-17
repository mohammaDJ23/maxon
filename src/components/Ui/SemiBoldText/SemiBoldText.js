import React from "react";
import classes from "./SemiBoldText.module.css";

const semiBoldText = (props) => (
  <h3 className={`${classes.SemiBold} ${props.stylename}`}>{props.children}</h3>
);

export default semiBoldText;
