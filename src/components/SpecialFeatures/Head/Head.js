import React from "react";
import HeadTextContainer from "../../Ui/HeadTextContainer/HeadTextContainer";
import OrangeText from "../../Ui/OrangeText/OrangeText";
import HeadTextBold from "../../Ui/HeadTextBold/HeadTextBold";

const head = (props) => (
  <HeadTextContainer ref={props.innerRef}>
    <OrangeText>SPECIAL FEATRUE</OrangeText>
    <HeadTextBold>Advertising with Difference</HeadTextBold>
  </HeadTextContainer>
);

export default head;
