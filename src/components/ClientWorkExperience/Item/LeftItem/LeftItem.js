import React from "react";
import ContentContainer from "../../../Ui/ContentContainer/ContentContainer";
import LeftSectionContainer from "../../../Ui/LeftSectionContainer/LeftSectionContainer";
import ImageContainer from "../../../Ui/ImageContainer/ImageContainer";
import TextContainer from "../../../Ui/TextContainer/TextContainer";
import SubHeadText from "../../../Ui/SubHeadText/SubHeadText";
import OrangeText from "../../../Ui/OrangeText/OrangeText";
import PallidText from "../../../Ui/PallidText/PallidText";
import LearnMore from "../../../Ui/LearnMore/LearnMore";
import classes from "./LeftItem.module.css";

const leftItem = (props) => (
  <LeftSectionContainer ref={props.innerRef}>
    <ContentContainer stylename={classes.ContentContainer}>
      <ImageContainer stylename={classes.Image}>
        <div
          className={classes.InnerImage}
          style={{
            background: `url(${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </ImageContainer>
      <TextContainer stylename={classes.TextContainer}>
        <OrangeText>{props.texts.title}</OrangeText>
        <SubHeadText stylename={classes.SubHeadText}>
          {props.texts.textBold}
        </SubHeadText>
        <PallidText stylename={classes.PallidText}>
          {props.texts.pallidText}
        </PallidText>
        <LearnMore stylename={classes.LearnMore} />
      </TextContainer>
    </ContentContainer>
  </LeftSectionContainer>
);

export default leftItem;
