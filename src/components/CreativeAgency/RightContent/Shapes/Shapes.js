import React from "react";
import classes from "./Shapes.module.css";

const shapes = (props) => {
  const { orangeShapeStyle, blueShapeStyle, hepaticShapeStyle } = props;

  return (
    <React.Fragment>
      <div className={classes.OrangeShape} style={orangeShapeStyle}></div>
      <div className={classes.BlueShape} style={blueShapeStyle}></div>
      <div className={classes.HepaticShape} style={hepaticShapeStyle}></div>
      <div
        className={classes.HepaticShapeLight}
        style={hepaticShapeStyle}
      ></div>
      <div
        className={classes.HepaticShapeLighter}
        style={hepaticShapeStyle}
      ></div>
    </React.Fragment>
  );
};

export default shapes;
