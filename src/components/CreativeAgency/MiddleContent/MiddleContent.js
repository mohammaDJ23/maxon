import React from "react";
import { TimelineLite } from "gsap";
import TextContainer from "../../Ui/TextContainer/TextContainer";
import OrangeText from "../../Ui/OrangeText/OrangeText";
import PallidText from "../../Ui/PallidText/PallidText";
import Button from "../../Ui/Button/Button";
import randomHandler from "../../../share/randomHandler";
import classes from "./MiddleContent.module.css";

class MiddleContent extends React.Component {
  constructor(props) {
    super(props);
    this.orangeText = null;
    this.headTextBolderTop = null;
    this.headTextBolderBot = null;
    this.pallidText = null;
    this.button = null;
    this.span = null;
    this.gsapAnimation = null;
  }

  componentDidMount() {
    this.gsapAnimationHandler();
    this.movingPinkShapeHandler();
    this.movingPinkShape();
  }

  componentWillUnmount() {
    clearInterval(this.pinkShapeTimer);
  }

  gsapAnimationHandler = () => {
    const tl = new TimelineLite();

    this.gsapAnimation = this.props.gsapAnimation(
      [
        this.orangeText,
        this.headTextBolderTop,
        this.headTextBolderBot,
        this.pallidText,
      ],
      this.button,
      this.span,
      tl
    );
  };

  movingPinkShape = () => {
    this.pinkShapeTimer = setInterval(this.movingPinkShapeHandler, 6000);
  };

  movingPinkShapeHandler = () => {
    const [randomWidth, randomHeight] = this.moving();
    this.props.pinkShapeStyleMiddleContent(randomWidth, randomHeight);
  };

  moving = () => {
    const { middleContentWidth, height } = this.props;
    const actualWidth = middleContentWidth - (middleContentWidth - 100);
    const actualHeight = height - (height - 18);
    const widthAndHeight = [actualWidth, actualHeight];

    const randomWidthAndHeight = widthAndHeight.map((item) =>
      randomHandler(item)
    );

    if (randomWidthAndHeight) {
      return randomWidthAndHeight;
    }
  };

  render() {
    let shape = null;

    if (this.props.showShapeOnMiddleAndRightContent) {
      shape = (
        <span
          ref={(span) => (this.span = span)}
          style={{
            bottom: `${this.props.pinkShape.bottom}%`,
            right: `${this.props.pinkShape.right}%`,
          }}
        ></span>
      );
    }

    return (
      <div className={classes.MiddleContent}>
        <TextContainer stylename={classes.TextContainer}>
          <div className={classes.OrangeText}>
            <OrangeText ref={(orangeText) => (this.orangeText = orangeText)}>
              Creative Agency
            </OrangeText>
          </div>
          <div className={classes.HeadTextBolder}>
            <div
              ref={(headTextBolder) =>
                (this.headTextBolderTop = headTextBolder)
              }
            >
              <h1>Building Brand is</h1>
            </div>
          </div>
          <div className={classes.HeadTextBolder}>
            <div
              ref={(headTextBolder) =>
                (this.headTextBolderBot = headTextBolder)
              }
            >
              <h1>Our Business</h1>
            </div>
          </div>
          <div className={classes.PallidText}>
            <PallidText ref={(pallidText) => (this.pallidText = pallidText)}>
              Can days you'll forth two grass form face you saying, divide.
              Subdue days light whose. Stars creepeth that creature thing.
            </PallidText>
          </div>
          <Button ref={(button) => (this.button = button)}>VIEW PROJECT</Button>
          {shape}
        </TextContainer>
      </div>
    );
  }
}

export default MiddleContent;
