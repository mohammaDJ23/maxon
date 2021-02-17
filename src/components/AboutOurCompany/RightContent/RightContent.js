import React from "react";
import TextContainer from "../../Ui/TextContainer/TextContainer";
import OrangeText from "../../Ui/OrangeText/OrangeText";
import HeadTextBold from "../../Ui/HeadTextBold/HeadTextBold";
import PallidText from "../../Ui/PallidText/PallidText";
import Button from "../../Ui/Button/Button";
import classes from "./RightContent.module.css";

const rightContent = (props) => {
  return (
    <TextContainer ref={props.innerRef} stylename={classes.TextContainer}>
      <OrangeText stylename={classes.OrangeText}>ABOUT OUR COMPANY</OrangeText>
      <HeadTextBold stylename={classes.HeadTextBold}>
        Make the customer the hero of your story
      </HeadTextBold>
      <h4>
        Open without also first greats land and bring said you give second face
        seed deep whales.
      </h4>
      <PallidText stylename={classes.PallidText}>
        May is called whose was moveth was isn't. Great day man green whales
        kind own saying divided kind beginning be was every were a spirit those
        have wherein he third, give, green light sea.
      </PallidText>
      <Button>LEARN MORE</Button>
    </TextContainer>
  );
};

export default rightContent;
