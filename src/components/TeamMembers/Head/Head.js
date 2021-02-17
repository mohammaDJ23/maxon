import React from "react";
import HeadTextContainer from "../../Ui/HeadTextContainer/HeadTextContainer";
import OrangeText from "../../Ui/OrangeText/OrangeText";
import HeadTextBold from "../../Ui/HeadTextBold/HeadTextBold";

const teamMembers = (props) => (
  <HeadTextContainer ref={props.innerRef}>
    <OrangeText>TEAM MEMBER</OrangeText>
    <HeadTextBold>Our Experienced Team</HeadTextBold>
  </HeadTextContainer>
);

export default teamMembers;
