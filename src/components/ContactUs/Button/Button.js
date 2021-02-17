import React from "react";
import Button from "../../Ui/Button/Button";
import classes from "./Button.module.css";

const button = (props) => (
  <div className={classes.Btn} ref={props.innerRef}>
    <Button>SEND MESSAGE</Button>
  </div>
);

export default button;
