import React from "react";
import classes from "./Profile.module.css";

const profile = (props) => (
  <div className={classes.Profile}>
    <img src={props.image} alt="profile" />
  </div>
);

export default profile;
