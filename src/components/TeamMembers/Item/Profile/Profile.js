import React from "react";
import classes from "./Profile.module.css";

const profile = (props) => (
  <div className={classes.Image}>
    <img src={props.image} alt="profile" />
  </div>
);

export default profile;
