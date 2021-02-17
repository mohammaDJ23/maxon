import React from "react";
import HeadtextConteiner from "../../Ui/HeadTextContainer/HeadTextContainer";
import OrangeText from "../../Ui/OrangeText/OrangeText";
import HeadTextBold from "../../Ui/HeadTextBold/HeadTextBold";

const head = (props) => (
  <HeadtextConteiner ref={props.innerRef}>
    <OrangeText>LATEST NEWS</OrangeText>
    <HeadTextBold>Latest From Blog</HeadTextBold>
  </HeadtextConteiner>
);

export default head;
