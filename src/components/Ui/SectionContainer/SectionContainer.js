import React from "react";
import classes from "./SectionContainer.module.css";

const sectionContainer = React.forwardRef((props, ref) => (
  <section
    id={props.id}
    className={`${classes.SectionContainer} ${props.stylename}`}
    ref={ref}
    style={props.styles}
  >
    {props.children}
  </section>
));

export default sectionContainer;
