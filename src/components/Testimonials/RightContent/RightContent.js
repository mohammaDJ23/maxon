import React from "react";
import Profile from "./Profile/Profile";
import Text from "./Text/Text";
import Logo from "./Logo/Logo";
import classes from "./RightContent.module.css";

const rightContent = (props) => (
  <div>
    <div className={classes.RightContent} ref={props.innerRef}>
      <Profile
        clickOnArrow={props.clickOnArrow}
        innerRef={props.profileInnerRef}
        profileTranslateX={props.profileTranslateX}
        translateXMin={props.translateXMin}
        translateXMax={props.translateXMax}
      />
      <Text
        innerRef={props.textInnerRef}
        textTranslateX={props.textTranslateX}
      />
      <Logo />
      <div className={classes.OrangeShape}></div>
    </div>
  </div>
);

export default rightContent;
