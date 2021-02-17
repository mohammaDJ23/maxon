import React from "react";
import SemiBoldText from "../../../Ui/SemiBoldText/SemiBoldText";
import PallidText from "../../../Ui/PallidText/PallidText";
import logoMedesa from "../../../../assets/images/logoMedesa.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <React.Fragment>
    <div className={classes.Image}>
      <img src={logoMedesa} alt="medesa" />
    </div>
    <div className={classes.Logo}>
      <SemiBoldText stylename={classes.SemiBoldText}>
        Millard Castinson
      </SemiBoldText>
      <PallidText stylename={classes.PallidText}>Software Developer</PallidText>
    </div>
  </React.Fragment>
);

export default logo;
