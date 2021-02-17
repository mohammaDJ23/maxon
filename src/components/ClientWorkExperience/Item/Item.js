import React from "react";
import RightItem from "./RightItem/RightItem";
import LeftItem from "./LeftItem/LeftItem";

const item = (props) => {
  let item = null;

  switch (props.direction) {
    case "left":
      return (item = (
        <LeftItem
          image={props.image}
          texts={props.texts}
          innerRef={props.innerRef}
          direction={props.direction}
        />
      ));
    case "right":
      return (item = (
        <RightItem
          image={props.image}
          texts={props.texts}
          innerRef={props.innerRef}
          direction={props.direction}
        />
      ));
    default:
      return item;
  }
};

export default item;
