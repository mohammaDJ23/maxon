import React from "react";
import { connect } from "react-redux";
import { TimelineLite } from "gsap";
import WorksItem from "./Item/Item";
import ContentContainer from "../Ui/ContentContainer/ContentContainer";
import SectionContainer from "../Ui/SectionContainer/SectionContainer";
import MiddleSectionContainer from "../Ui/MiddleSectionContainer/MiddleSectionContainer";
import getStyleElement from "../../share/getStyleElement";
import * as actions from "../../store/actions/index";
import classes from "./Works.module.css";

class Works extends React.Component {
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

    this.gsapAnimation = this.props.worksGsapAnimation(
      this.sectionContainer,
      this.item,
      tl
    );
  };

  render() {
    const { works } = this.props;
    const workArr = [];

    for (let key in works) {
      const work = works[key];
      workArr.push({ ...work });
    }

    const item = workArr.map((item, index) => (
      <WorksItem
        key={index}
        innerRef={(item) => (this.item[index] = item)}
        image={item.image}
        number={item.number}
        title={item.title}
        index={index}
        wotksLength={workArr.length - 1}
      />
    ));

    return (
      <SectionContainer
        id="projects"
        stylename={classes.SectionContainer}
        ref={(sectionContainer) => (this.sectionContainer = sectionContainer)}
      >
        <MiddleSectionContainer stylename={classes.MiddleSectionContainer}>
          <ContentContainer stylename={classes.ContentContainer}>
            {item}
          </ContentContainer>
        </MiddleSectionContainer>
      </SectionContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    worksGsapAnimation: (sectionContainer, items, tl) =>
      dispatch(actions.worksGsapAnimation(sectionContainer, items, tl)),
  };
};

export default connect(null, mapDispatchToProps)(Works);
