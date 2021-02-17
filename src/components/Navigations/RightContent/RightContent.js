import React from "react";
import Items from "./Items/Items";
import classes from "./RightContent.module.css";

const rightContent = (props) => (
  <div className={classes.RightContent}>
    <ul>
      <Items gsapAnimation={props.gsapAnimation} />
    </ul>
  </div>
);

export default rightContent;
