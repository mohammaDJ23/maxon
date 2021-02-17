import React from "react";
import { TimelineLite } from "gsap";
import { connect } from "react-redux";
import ContentContainer from "../Ui/ContentContainer/ContentContainer";
import SectionContainer from "../Ui/SectionContainer/SectionContainer";
import MiddleSectionContainer from "../Ui/MiddleSectionContainer/MiddleSectionContainer";
import getStyleElement from "../../share/getStyleElement";
import FooterItem from "./Item/Item";
import * as actions from "../../store/actions/index";
import classes from "./FooterWidgets.module.css";

class FooterWidgets extends React.Component {
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

    this.gsapAnimation = this.props.gsapAnimation(
      this.sectionContainer,
      this.item,
      tl
    );
  };

  render() {
    const { footerWidgetInfo } = this.props;
    const footerWidgets = [];

    for (let key in footerWidgetInfo) {
      const footerInfo = footerWidgetInfo[key];
      footerWidgets.push({ ...footerInfo });
    }

    const item = footerWidgets.map((item, index) => (
      <FooterItem
        key={index}
        innerRef={(item) => (this.item[index] = item)}
        title={item.title}
        info={item.info}
        images={item.images}
        icons={item.icons}
      />
    ));

    return (
      <SectionContainer
        stylename={classes.SectionContainer}
        ref={(sectionContainer) => (this.sectionContainer = sectionContainer)}
      >
        <MiddleSectionContainer>
          <ContentContainer stylename={classes.ContentContainer}>
            {item ? item : null}
          </ContentContainer>
        </MiddleSectionContainer>
      </SectionContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gsapAnimation: (sectionContainer, footer, tl) =>
      dispatch(
        actions.footerWidgetsGsapAnimation(sectionContainer, footer, tl)
      ),
  };
};

export default connect(null, mapDispatchToProps)(FooterWidgets);
