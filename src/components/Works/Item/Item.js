import React from "react";
import SemiBoldText from "../../Ui/SemiBoldText/SemiBoldText";
import classes from "./Item.module.css";

const item = (props) => (
  <div className={classes.Item} ref={props.innerRef}>
    <div>
      <img src={props.image} alt="logo" />
    </div>
    <div className={classes.Text}>
      <div>
        <h1>{props.number}</h1>
      </div>
      <div>
        <SemiBoldText stylename={classes.SemiBoldText}>
          {props.title}
        </SemiBoldText>
      </div>
    </div>
  </div>
);

export default item;
