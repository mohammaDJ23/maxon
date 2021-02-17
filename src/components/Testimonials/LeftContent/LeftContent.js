import React from "react";
import play from "../../../assets/images/play.png";
import classes from "./LeftContent.module.css";

const leftContent = (props) => (
  <div className={classes.LeftContent} ref={props.innerRef}>
    <div className={classes.Image}></div>
    <div className={classes.Play}>
      <div>
        <img src={play} alt="team" />
      </div>
      <p>Watch intro video</p>
    </div>
  </div>
);

export default leftContent;
