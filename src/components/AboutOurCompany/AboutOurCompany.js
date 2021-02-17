import React from "react";
import { connect } from "react-redux";
import { TimelineLite } from "gsap";
import ContentContainer from "../Ui/ContentContainer/ContentContainer";
import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";
import SectionContainer from "../Ui/SectionContainer/SectionContainer";
import LeftSectionContainer from "../Ui/LeftSectionContainer/LeftSectionContainer";
import getStyleElement from "../../share/getStyleElement";
import * as actions from "../../store/actions/index";
import classes from "./AboutOurCompany.module.css";

class AboutOurCompany extends React.Component {
  constructor(props) {
    super(props);
    this.sectionContainer = null;
    this.leftContent = null;
    this.rightContent = null;
    this.mauveShape = null;
    this.gsapAnimation = null;
  }

  componentDidMount() {
    getStyleElement(this.sectionContainer, this.gsapAnimationHandler);
  }

  gsapAnimationHandler = () => {
    const leftContentChildren = this.leftContent.children;
    const rightContentChildren = this.rightContent.children;
    const tl = new TimelineLite();

    this.gsapAnimation = this.props.gsapAnimation(
      leftContentChildren,
      rightContentChildren,
      this.mauveShape,
      tl
    );
  };

  render() {
    return (
      <SectionContainer
        id="about"
        stylename={classes.SectionContainer}
        ref={(sectionContainer) => (this.sectionContainer = sectionContainer)}
      >
        <LeftSectionContainer stylename={classes.LeftSectionContainer}>
          <ContentContainer stylename={classes.ContentContainer}>
            <LeftContent
              innerRef={(leftContent) => (this.leftContent = leftContent)}
            />
            <RightContent
              innerRef={(rightContent) => (this.rightContent = rightContent)}
            />
          </ContentContainer>
          <div
            className={classes.MauveShape}
            ref={(mauveShape) => (this.mauveShape = mauveShape)}
          ></div>
        </LeftSectionContainer>
      </SectionContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gsapAnimation: (leftContent, rightContent, mauveShape, tl) =>
      dispatch(
        actions.aboutOurCompanyGsapAnimation(
          leftContent,
          rightContent,
          mauveShape,
          tl
        )
      ),
  };
};

export default connect(null, mapDispatchToProps)(AboutOurCompany);
