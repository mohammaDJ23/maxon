import React from "react";
import HeadTextContainer from "../../Ui//HeadTextContainer/HeadTextContainer";
import OrangeText from "../../Ui//OrangeText/OrangeText";
import HeadTextBold from "../../Ui//HeadTextBold/HeadTextBold";

const head = (props) => (
  <HeadTextContainer ref={props.innerRef}>
    <OrangeText>TESTIMONIALS</OrangeText>
    <HeadTextBold>Happy Client Says</HeadTextBold>
  </HeadTextContainer>
);

export default head;
