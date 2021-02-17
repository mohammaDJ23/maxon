import React from "react";
import Profile from "./Profile/Profile";
import Text from "./Text/Text";
import classes from "./Item.module.css";

const item = (props) => {
  const texts = props.community.map((item, index) => {
    let dot = <span className={classes.Dot}>&#9679; </span>;
    if (index === props.community.length - 1) dot = null;

    return (
      <span key={index} className={classes.span}>
        {item} {dot}
      </span>
    );
  });

  return (
    <div className={classes.Content} ref={props.innerRef}>
      <Profile image={props.image} />
      <div>
        <Text title={props.title} job={props.job} tXsT={texts ? texts : null} />
      </div>
    </div>
  );
};

export default item;
