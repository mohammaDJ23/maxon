import React from "react";
import { TimelineLite } from "gsap";
import randomHandler from "../../../share/randomHandler";
import classes from "./LeftContent.module.css";

class LeftContent extends React.Component {
  constructor(props) {
    super(props);
    this.leftContent = null;
    this.gsapAnimation = null;
  }

  componentDidMount() {
    this.gsapAnimationHandler();
    this.movingOrangeShapeHandler();
    this.movingPinkShapeHandler();
    this.movingMauveShapeHandler();
    this.timerMethods();
  }

  componentWillUnmount() {
    clearInterval(this.orangeShapeTimer);
    clearInterval(this.pinkShapeTimer);
    clearInterval(this.mauveShapeTimer);
  }

  gsapAnimationHandler = () => {
    const leftContentChildren = this.leftContent.children;
    const tl = new TimelineLite();
    this.gsapAnimation = this.props.gsapAnimation(leftContentChildren, tl);
  };

  timerMethods = () => {
    this.orangeShapeTimer = setInterval(this.movingOrangeShapeHandler, 1000);
    this.pinkShapeTimer = setInterval(this.movingPinkShapeHandler, 1800);
    this.mauveShapeTimer = setInterval(this.movingMauveShapeHandler, 3500);
  };

  movingOrangeShapeHandler = () => {
    const [randomWidth, randomHeigth, randomColors] = this.moving();

    this.props.orangeShapeStyleLeftContent(
      randomWidth,
      randomHeigth,
      randomColors
    );
  };

  movingPinkShapeHandler = () => {
    const [randomWidth, randomHeigth] = this.moving();
    this.props.pinkShapeStyleLeftContent(randomWidth, randomHeigth);
  };

  movingMauveShapeHandler = () => {
    const [randomWidth, randomHeigth] = this.moving();
    this.props.mauveShapeStyleLeftContent(randomWidth, randomHeigth);
  };

  moving = () => {
    const { leftContentWidth, height } = this.props;
    const colors = ["#ff7214", "#d60f9a", "#0e8aff"];
    const elementWidth = leftContentWidth - (leftContentWidth - 80);
    const elementHeight = height - (height - 80);
    const randomIndexColors = randomHandler(colors.length);
    const randomColors = colors[randomIndexColors];
    const widthAndHeight = [elementWidth, elementHeight];

    const randomWidthAndHeight = widthAndHeight.map((item) =>
      randomHandler(item)
    );

    if (randomWidthAndHeight && randomColors) {
      return [...randomWidthAndHeight, randomColors];
    }
  };

  render() {
    const { showLeftContent, orangeShape, pinkShape, mauveShape } = this.props;

    const orangeShapeStyle = {
      top: `${orangeShape.top}%`,
      left: `${orangeShape.left}%`,
      transform: `rotate(${orangeShape.rotation}deg)`,
      borderColor: `${orangeShape.borderColor}`,
    };

    const pinkShapeStyle = {
      top: `${pinkShape.top}%`,
      left: `${pinkShape.left}%`,
      transform: `rotate(${pinkShape.rotation}deg)`,
    };

    const mauveShapeStyle = {
      bottom: `${mauveShape.bottom}%`,
      left: `${mauveShape.left}%`,
    };

    const show = (
      <div
        className={classes.LeftContent}
        ref={(leftContent) => (this.leftContent = leftContent)}
      >
        <div className={classes.OrangeShape} style={orangeShapeStyle}></div>
        <div className={classes.PinkShape} style={pinkShapeStyle}></div>
        <div className={classes.PinkShapeLight} style={pinkShapeStyle}></div>
        <div className={classes.PinkShapeLighter} style={pinkShapeStyle}></div>
        <div className={classes.MauveShape} style={mauveShapeStyle}></div>
      </div>
    );

    return showLeftContent ? show : null;
  }
}

export default LeftContent;
