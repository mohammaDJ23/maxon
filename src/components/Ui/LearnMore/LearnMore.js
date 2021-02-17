import React from "react";
import classes from "./LearnMore.module.css";

const learnMore = (props) => (
  <div className={`${classes.LearnMore} ${props.stylename}`}>
    <p>
      LEARN MORE<a href="/">&#8594;</a>
    </p>
  </div>
);

export default learnMore;
