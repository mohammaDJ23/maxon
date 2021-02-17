import React from "react";
import Input from "../../Ui/Input/Input";
import classes from "./RightContent.module.css";

const rightContent = (props) => {
  const {
    elementConfig,
    elementType,
    innerRef,
    touch,
    valid,
    clicked,
    value,
  } = props;

  let inputs = null;
  const style = [];

  if (elementConfig.type === "text") {
    style.push(classes.Text);
  }

  if (elementConfig.type === "email") {
    style.push(classes.Email);
  }

  switch (elementType) {
    case "input":
      return (inputs = (
        <Input
          stylename={style.join(" ")}
          ref={innerRef}
          elementConfig={elementConfig}
          value={value}
          touch={touch}
          valid={valid}
          clicked={clicked}
        />
      ));
    case "textarea":
      return (inputs = (
        <textarea
          className={classes.Textarea}
          ref={innerRef}
          {...elementConfig}
          value={value}
          onChange={clicked}
        />
      ));
    default:
      return inputs;
  }
};

export default rightContent;
