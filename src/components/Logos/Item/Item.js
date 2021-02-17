import React from "react";
import classes from "./Item.module.css";

const logo = (props) => (
  <div className={classes.Image} ref={props.innerRef}>
    <img src={props.logos} alt="logos" />
  </div>
);

export default logo;
