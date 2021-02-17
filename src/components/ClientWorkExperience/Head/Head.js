import React from "react";
import HeadTextContainer from "../..//Ui/HeadTextContainer/HeadTextContainer";
import OrangeText from "../../Ui/OrangeText/OrangeText";
import HeadTextBold from "../../Ui/HeadTextBold/HeadTextBold";

const head = (props) => (
  <HeadTextContainer ref={props.innerRef}>
    <OrangeText>CLIENT WORK EXPERIENCE</OrangeText>
    <HeadTextBold>Recent Creative Work</HeadTextBold>
  </HeadTextContainer>
);

export default head;
