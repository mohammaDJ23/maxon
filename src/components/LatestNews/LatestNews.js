import React from "react";
import { connect } from "react-redux";
import { TimelineLite } from "gsap";
import ContentContainer from "../Ui/ContentContainer/ContentContainer";
import Head from "./Head/Head";
import LatestNewsItem from "./Item/Item";
import SectionContainer from "../Ui/SectionContainer/SectionContainer";
import MiddleSectionContainer from "../Ui/MiddleSectionContainer/MiddleSectionContainer";
import getStyleElement from "../../share/getStyleElement";
import * as actions from "../../store/actions/index";
import classes from "./LatestNews.module.css";

class LatestNews extends React.Component {
  constructor(props) {
    super(props);
    this.sectionContainer = null;
    this.head = null;
    this.item = [];
    this.gsapAnimation = null;
  }

  componentDidMount() {
    getStyleElement(this.sectionContainer, this.gsapAnimationHandler);
  }

  gsapAnimationHandler = () => {
    const headChildren = this.head.children;
    const tl = new TimelineLite();
    this.gsapAnimation = this.props.gsapAnimation(headChildren, this.item, tl);
  };

  render() {
    const { latestNewsInfo } = this.props;
    const latestNews = [];

    for (let key in latestNewsInfo) {
      const newsInfo = latestNewsInfo[key];
      latestNews.push({ ...newsInfo });
    }

    const item = latestNews.map((item, index) => (
      <LatestNewsItem
        key={index}
        innerRef={(item) => (this.item[index] = item)}
        image={item.image}
        icons={item.icons}
        design={item.design}
        title={item.title}
        commentAndLike={item.cmAndLi}
      />
    ));

    return (
      <SectionContainer
        id="blog"
        ref={(sectionContainer) => (this.sectionContainer = sectionContainer)}
      >
        <Head innerRef={(head) => (this.head = head)} />
        <MiddleSectionContainer stylename={classes.MiddleSectionContainer}>
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
    gsapAnimation: (head, items, tl) =>
      dispatch(actions.latestNewsGsapAnimation(head, items, tl)),
  };
};

export default connect(null, mapDispatchToProps)(LatestNews);
