import React from "react";
import Profile from "./Profile/Profile";
import Text from "./Text/Text";
import classes from "./Item.module.css";

const item = (props) => (
  <div className={classes.Item} ref={props.innerRef}>
    <Profile image={props.image} />
    <Text
      title={props.title}
      design={props.design}
      icons={props.icons}
      comment={props.commentAndLike}
    />
  </div>
);

export default item;
