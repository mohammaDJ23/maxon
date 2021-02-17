import React from "react";
import SemiBoldText from "../../Ui/SemiBoldText/SemiBoldText";
import PallidText from "../../Ui/PallidText/PallidText";
import classes from "./Item.module.css";

const item = (props) => {
  const icon = props.icons.map((item, index) => (
    <img key={index} className={classes.Images} src={item} alt="icon" />
  ));

  const image = props.images.map((item, index) => (
    <img key={index} src={item} alt="work" />
  ));

  const text = props.info.map((item, index) => {
    const icons = icon ? icon : null;

    return (
      <PallidText key={index} stylename={classes.PallidText}>
        {icons.splice(0, 1)} {item}
      </PallidText>
    );
  });

  return (
    <div className={classes.Text} ref={props.innerRef}>
      <SemiBoldText stylename={classes.SemiBoldText}>
        {props.title}
      </SemiBoldText>
      <div>{text ? text : null}</div>
      <div className={classes.Img}>{image ? image : null}</div>
    </div>
  );
};

export default item;
