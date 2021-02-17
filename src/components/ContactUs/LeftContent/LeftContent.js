import React from "react";
import HeadTextContainer from "../../Ui/HeadTextContainer/HeadTextContainer";
import OrangeText from "../../Ui/OrangeText/OrangeText";
import HeadTextBold from "../../Ui/HeadTextBold/HeadTextBold";
import classes from "./LeftContent.module.css";

const leftContent = (props) => (
  <HeadTextContainer stylename={classes.HeadTextContainer} ref={props.innerRef}>
    <OrangeText>CONTACT US</OrangeText>
    <HeadTextBold stylename={classes.HeadTextBold}>
      Don’t Hesitate, Ask Any Query
    </HeadTextBold>
    {props.locationInfo}
  </HeadTextContainer>
);

export default leftContent;
