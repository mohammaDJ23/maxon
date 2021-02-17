import React from "react";
import profilePic from "../../../../assets/images/profile.png";
import arrow from "../../../../assets/images/arrow.png";
import classes from "./Profile.module.css";

const profile = (props) => (
  <div>
    <div className={classes.Profile} ref={props.innerRef}>
      <div
        style={{
          transform: `translateX(${props.profileTranslateX}px)`,
        }}
      >
        <img src={profilePic} alt="profile" />
        <img src={profilePic} alt="profile" />
        <img src={profilePic} alt="profile" />
      </div>
    </div>
    <div className={classes.Arrow}>
      <p
        onClick={(event) => props.clickOnArrow(event, "left")}
        className={props.translateXMin ? classes.LeftArrow : null}
      >
        <img src={arrow} alt="arrow" />
      </p>
      <p
        onClick={(event) => props.clickOnArrow(event, "right")}
        className={props.translateXMax ? classes.RightArrow : null}
      >
        <img src={arrow} alt="arrow" />
      </p>
    </div>
  </div>
);

export default profile;
