import React from "react";
import SemiBoldText from "../../Ui/SemiBoldText/SemiBoldText";
import PallidText from "../../Ui/PallidText/PallidText";
import classes from "./Item.module.css";

const item = (props) => (
  <div className={classes.Item} ref={props.innerRef}>
    <div className={classes.Head}>
      <div
        className={classes.Circle}
        style={{ backgroundColor: props.backgroundColor }}
      >
        <img src={props.image} alt="icon" />
      </div>
    </div>
    <SemiBoldText>{props.title}</SemiBoldText>
    <PallidText stylename={classes.PallidText}>{props.summary}</PallidText>
  </div>
);

export default item;
