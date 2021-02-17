import React from "react";
import { connect } from "react-redux";
import { TimelineLite } from "gsap";
import ContentContainer from "../Ui/ContentContainer/ContentContainer";
import Head from "./Head/Head";
import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";
import SectionContainer from "../Ui/SectionContainer/SectionContainer";
import LeftSectionContainer from "../Ui/LeftSectionContainer/LeftSectionContainer";
import getStyleElement from "../../share/getStyleElement";
import * as actions from "../../store/actions/index";
import classes from "./Testimonials.module.css";

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.sectionContainer = null;
    this.head = null;
    this.leftContent = null;
    this.rightContent = null;
    this.orangeShape = null;
    this.profile = null;
    this.text = null;
    this.profileWidth = null;
    this.textWidth = null;
    this.gsapAnimation = null;
  }

  componentDidMount() {
    getStyleElement(this.sectionContainer, this.gsapAnimationHandler);
    this.getStyleHandler();
  }

  getStyleHandler = () => {
    const getProfileWidth = window
      .getComputedStyle(this.profile)
      .getPropertyValue("width");

    const getTextHeight = window
      .getComputedStyle(this.text.children[0].children[0])
      .getPropertyValue("width");

    const profileWidth = parseInt(getProfileWidth);
    const textHeight = parseInt(getTextHeight);
    this.profileWidth = profileWidth + 20;

    const textWidth = Math.floor(
      (textHeight / textHeight / this.text.children[0].children.length) * 100
    );

    this.textWidth = textWidth;
    const profileTranslateX = -profileWidth - 20;
    const textTranslateX = -textWidth;
    const profileLength = this.profile.firstChild.children.length - 1;

    this.props.setProfileLengthAndTranslate(
      [profileTranslateX, textTranslateX],
      profileLength
    );
  };

  gsapAnimationHandler = () => {
    const headChildren = this.head.children;
    const leftConttentChildren = this.leftContent.children;
    const rightContentChildren = this.rightContent.children;
    const tl = new TimelineLite();

    this.gsapAnimation = this.props.testimonialsGsapAnimation(
      headChildren,
      leftConttentChildren,
      rightContentChildren,
      tl
    );
  };

  clickArrowHandler = (event, direction) => {
    if (event.detail >= 2) return;

    if (direction === "left") {
      this.props.leftArrowControl([this.profileWidth, this.textWidth]);
    }
    if (direction === "right") {
      this.props.rightArrowControl([this.profileWidth, this.textWidth]);
    }
  };

  render() {
    const { profileTranslateX, textTranslateX, profileLength } = this.props;

    const translateXMin =
      profileTranslateX >= this.profileWidth - this.profileWidth;

    const translateXMax =
      profileTranslateX <= this.profileWidth * profileLength * -1;

    return (
      <SectionContainer
        ref={(sectionContainer) => (this.sectionContainer = sectionContainer)}
      >
        <Head innerRef={(head) => (this.head = head)} />
        <LeftSectionContainer>
          <ContentContainer stylename={classes.ContentContainer}>
            <LeftContent
              innerRef={(leftContent) => (this.leftContent = leftContent)}
            />
            <RightContent
              innerRef={(rightContent) => (this.rightContent = rightContent)}
              profileInnerRef={(profile) => (this.profile = profile)}
              textInnerRef={(text) => (this.text = text)}
              clickOnArrow={this.clickArrowHandler}
              profileTranslateX={profileTranslateX}
              textTranslateX={textTranslateX}
              translateXMin={translateXMin}
              translateXMax={translateXMax}
            />
          </ContentContainer>
        </LeftSectionContainer>
      </SectionContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileTranslateX: state.testimonials.profileTranslateX,
    textTranslateX: state.testimonials.textTranslateX,
    profileLength: state.testimonials.profileLength,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    testimonialsGsapAnimation: (head, leftContent, rightContent, tl) =>
      dispatch(
        actions.testimonialsGsapAnimation(head, leftContent, rightContent, tl)
      ),
    setProfileLengthAndTranslate: (translate, profileLength) =>
      dispatch(actions.setProfileLengthAndTranslate(translate, profileLength)),
    leftArrowControl: (width) => dispatch(actions.leftArrowControl(width)),
    rightArrowControl: (width) => dispatch(actions.rightArrowControl(width)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
