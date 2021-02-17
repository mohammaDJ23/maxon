import React from "react";
import { TimelineLite } from "gsap";
import randomHandler from "../../../share/randomHandler";
import classes from "./LeftContent.module.css";

class LeftContent extends React.Component {
  constructor(props) {
    super(props);
    this.maxon = null;
    this.gsapAnimation = null;
  }

  componentDidMount() {
    this.changeColorHandler();
    this.gsapAnimationHandler();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  changeColorHandler = () => {
    this.timer = setInterval(this.changeColor, 5000);
  };

  changeColor = () => {
    const initialColors = ["#ff7214", "#0e8aff", "#d60f9a"];
    const index = randomHandler(initialColors.length);
    const colors = initialColors[index];
    this.props.changeColorOfLogo(colors);
  };

  gsapAnimationHandler = () => {
    const tl = new TimelineLite();
    this.gsapAnimation = this.props.gsapAnimation(this.maxon, tl);
  };

  render() {
    const { stylename, color } = this.props;

    return (
      <div
        className={`${classes.LeftContent} ${stylename}`}
        ref={(div) => (this.maxon = div)}
      >
        <h1>
          MA
          <span style={{ color: color }}>X</span>
          ON
        </h1>
      </div>
    );
  }
}

export default LeftContent;
