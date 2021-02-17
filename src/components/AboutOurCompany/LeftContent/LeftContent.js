import React from "react";
import HeadTextBold from "../../Ui/HeadTextBold/HeadTextBold";
import classes from "./LeftContent.module.css";

const leftContent = (props) => (
  <div className={classes.LeftContent} ref={props.innerRef}>
    <div className={classes.Pic}></div>
    <div className={classes.Pic}></div>
    <div className={classes.Pic}></div>
    <div className={classes.Pic}></div>
    <div className={classes.Text}>
      <HeadTextBold stylename={classes.HeadTextBold}>
        25 Years Working Experience
      </HeadTextBold>
    </div>
  </div>
);

export default leftContent;
