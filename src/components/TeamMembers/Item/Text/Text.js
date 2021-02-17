import React from "react";
import SemiBoldText from "../../../Ui/SemiBoldText/SemiBoldText";
import PallidText from "../../../Ui/PallidText/PallidText";
import classes from "./Text.module.css";

const text = (props) => (
  <React.Fragment>
    <SemiBoldText stylename={classes.SemiBoldText}>{props.title}</SemiBoldText>
    <PallidText stylename={classes.PallidText}>{props.job}</PallidText>
    <PallidText stylename={classes.PallidText}>{props.tXsT}</PallidText>
  </React.Fragment>
);

export default text;
