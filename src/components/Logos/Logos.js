import React from "react";
import { TimelineLite } from "gsap";
import { connect } from "react-redux";
import ContentContainer from "../Ui/ContentContainer/ContentContainer";
import SectionContainer from "../Ui/SectionContainer/SectionContainer";
import MiddleSectionContainer from "../Ui/MiddleSectionContainer/MiddleSectionContainer";
import getStyleElement from "../../share/getStyleElement";
import LogosItem from "./Item/Item";
import * as actions from "../../store/actions/index";
import classes from "./Logos.module.css";

class Logos extends React.Component {
  constructor(props) {
    super(props);
    this.sectionContainer = null;
    this.item = [];
    this.gsapAnimation = null;
  }

  componentDidMount() {
    getStyleElement(this.sectionContainer, this.gsapAnimationHandler);
  }

  gsapAnimationHandler = () => {
    const tl = new TimelineLite();
    this.gsapAnimation = this.props.gsapAnimation(this.item, tl);
  };

  render() {
    const { logos } = this.props;
    const logosArr = [];

    for (let key in logos) {
      const logo = logos[key];
      logosArr.push(logo);
    }

    const logo = logosArr.map((item, index) => (
      <LogosItem
        key={index}
        innerRef={(item) => (this.item[index] = item)}
        logos={item}
      />
    ));

    return (
      <SectionContainer
        stylename={classes.SectionContainer}
        ref={(sectionContainer) => (this.sectionContainer = sectionContainer)}
      >
        <MiddleSectionContainer>
          <ContentContainer stylename={classes.ContentContainer}>
            {logo ? logo : null}
          </ContentContainer>
        </MiddleSectionContainer>
      </SectionContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gsapAnimation: (items, tl) =>
      dispatch(actions.logosGsapAnimaiton(items, tl)),
  };
};

export default connect(null, mapDispatchToProps)(Logos);
