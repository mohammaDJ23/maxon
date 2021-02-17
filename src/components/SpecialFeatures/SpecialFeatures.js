import React from "react";
import { TimelineLite } from "gsap";
import { connect } from "react-redux";
import ContentContainer from "../Ui/ContentContainer/ContentContainer";
import Head from "./Head/Head";
import SectionContainer from "../Ui/SectionContainer/SectionContainer";
import MiddleSectionContainer from "../Ui/MiddleSectionContainer/MiddleSectionContainer";
import getStyleElement from "../../share/getStyleElement";
import SpeciaFeatureItem from "./Item/Item";
import * as actions from "../../store/actions/index";
import classes from "./SpecialFeatures.module.css";

class SpecialFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.sectionContainer = null;
    this.head = null;
    this.item = [];
    this.greenShape = null;
    this.gsapAnimation = null;
  }

  componentDidMount() {
    getStyleElement(this.sectionContainer, this.gsapAnimationHandler);
  }

  gsapAnimationHandler = () => {
    const headChildren = this.head.children;
    const tl = new TimelineLite();

    this.gsapAnimation = this.props.specialFeaturesGsapAnimation(
      headChildren,
      this.item,
      this.greenShape,
      tl
    );
  };

  render() {
    const { specialFeaturesInfo } = this.props;
    const specialFeature = [];

    for (let key in specialFeaturesInfo) {
      const specialInfo = specialFeaturesInfo[key];
      specialFeature.push({ ...specialInfo });
    }

    const item = specialFeature.map((item, index) => (
      <SpeciaFeatureItem
        key={item.title}
        innerRef={(item) => (this.item[index] = item)}
        image={item.image}
        backgroundColor={item.backgroundColor}
        title={item.title}
        summary={item.summary}
      />
    ));

    return (
      <SectionContainer
        id="features"
        ref={(sectionContainer) => (this.sectionContainer = sectionContainer)}
      >
        <Head innerRef={(head) => (this.head = head)} />
        <MiddleSectionContainer stylename={classes.MiddleSectionContainer}>
          <ContentContainer stylename={classes.ContentContainer}>
            {item ? item : null}
          </ContentContainer>
          <div
            className={classes.GreenShape}
            ref={(greenShape) => (this.greenShape = greenShape)}
          ></div>
        </MiddleSectionContainer>
      </SectionContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    specialFeaturesGsapAnimation: (head, items, greenShape, tl) =>
      dispatch(
        actions.specialFeaturesGsapAnimation(head, items, greenShape, tl)
      ),
  };
};

export default connect(null, mapDispatchToProps)(SpecialFeatures);
