import React from "react";
import PallidText from "../../../Ui/PallidText/PallidText";
import SemiTextBold from "../../../Ui/SemiBoldText/SemiBoldText";
import classes from "./Text.module.css";

const text = (props) => {
  const icon = props.icons.map((item, index) => (
    <img key={index} className={classes.Img} src={item} alt="icon" />
  ));

  const dt = props.design.map((item, index) => {
    let line = <span className={classes.Line}>|</span>;
    if (index === props.design.length - 1) line = null;

    return (
      <React.Fragment key={index}>
        <span>{item}</span>
        {line}
      </React.Fragment>
    );
  });

  const commentAndLike = props.comment.map((item, index) => {
    const icons = icon ? icon : null;

    return (
      <React.Fragment key={index}>
        {icons.splice(0, 1)}
        <span>{item}</span>
      </React.Fragment>
    );
  });

  return (
    <div className={classes.Text}>
      <PallidText stylename={classes.PallidText}>{dt ? dt : null}</PallidText>
      <SemiTextBold>{props.title}</SemiTextBold>
      <PallidText>{commentAndLike ? commentAndLike : null}</PallidText>
    </div>
  );
};

export default text;
