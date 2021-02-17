import React from "react";
import { connect } from "react-redux";
import { TimelineLite } from "gsap";
import ContentContainer from "../Ui/ContentContainer/ContentContainer";
import RightContent from "./RightContent/RightContent";
import LeftContent from "./LeftContent/LeftContent";
import { addScrollEvent, removeScrollEvent } from "../../share/scrollEvent";
import * as actions from "../../store/actions/index";
import classes from "./Navigations.module.css";

class Navigations extends React.Component {
  constructor(props) {
    super(props);
    this.navigationSection = null;
    this.gsapAnimation = null;
  }

  componentDidMount() {
    this.gsapAnimationHandler();
    addScrollEvent(this.scrollEventHandler);
  }

  componentWillUnmount() {
    removeScrollEvent(this.scrollEventHandler);
  }

  gsapAnimationHandler = () => {
    const tl = new TimelineLite();

    this.gsapAnimation = this.props.navigationGsapAnimation(
      this.navigationSection,
      tl
    );
  };

  scrollEventHandler = () => {
    const {
      heightOfHeader,
      changeNavigationStyle,
      defaultNavigationStyle,
    } = this.props;

    if (window.pageYOffset >= heightOfHeader - 70) {
      changeNavigationStyle();
    } else {
      defaultNavigationStyle();
    }
  };

  render() {
    const {
      color,
      changeColorOfLogo,
      rightContentNavGsapAnimation,
      leftContentNavGsapAnimation,
      newNavigationStyle,
    } = this.props;

    const classNameArr = [classes.NavigationSection];

    if (newNavigationStyle) {
      classNameArr.push(classes.NewNavigationSection);
    }

    return (
      <nav
        className={classNameArr.join(" ")}
        ref={(nav) => (this.navigationSection = nav)}
      >
        <div className={classes.Container}>
          <ContentContainer stylename={classes.ContentContainer}>
            <LeftContent
              color={color}
              changeColorOfLogo={changeColorOfLogo}
              gsapAnimation={leftContentNavGsapAnimation}
            />
            <RightContent gsapAnimation={rightContentNavGsapAnimation} />
          </ContentContainer>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newNavigationStyle: state.navigations.newStyleOfNavigation,
    color: state.navigations.color,
    heightOfHeader: state.creativeAgency.heightOfHeader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigationGsapAnimation: (navigationSection, tl) =>
      dispatch(actions.navigationGsapAnimation(navigationSection, tl)),
    changeColorOfLogo: (colors) => dispatch(actions.changeColorOfLogo(colors)),
    rightContentNavGsapAnimation: (items, tl) =>
      dispatch(actions.itemsGsapAnimation(items, tl)),
    leftContentNavGsapAnimation: (maxon, tl) =>
      dispatch(actions.leftContentNavGsapAnimation(maxon, tl)),
    changeNavigationStyle: () => dispatch(actions.changeNavigationStyle()),
    defaultNavigationStyle: () => dispatch(actions.defaultNavigationStyle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigations);
