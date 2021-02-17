import React from "react";
import { connect } from "react-redux";
import { TimelineLite } from "gsap";
import Navigations from "../../Navigations/Navigations";
import SideNavigation from "../../Navigations/SideNavigation/SideNavigation";
import * as actions from "../../../store/actions/index";
import classes from "./Layout.module.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.menuIcon = null;
    this.gsapAnimation = null;
  }

  componentDidMount() {
    this.gsapAnimationHandler();
  }

  gsapAnimationHandler = () => {
    const menuIconChildren = this.menuIcon.children;
    const tl = new TimelineLite();
    this.gsapAnimation = this.props.iconGsapAnimation(menuIconChildren, tl);
  };

  sideNavigationStyleHandler = (event) => {
    const {
      sideNavigationStyleFunc,
      sideNavigationStyle,
      menuIconGsapAnimation,
    } = this.props;

    if (event.detail >= 2) return;
    sideNavigationStyleFunc();
    const firstLine = this.menuIcon.children[0];
    const secondLine = firstLine.nextElementSibling;
    const thirdLine = secondLine.nextElementSibling;
    const tl = new TimelineLite();

    this.gsapAnimation = menuIconGsapAnimation(
      sideNavigationStyle,
      firstLine,
      secondLine,
      thirdLine,
      tl
    );
  };

  render() {
    const {
      children,
      itemsGsapAnimationSideNavigation,
      sideNavigationStyle,
      newNavigationStyle,
    } = this.props;

    const classNameArr = [classes.MenuIcon];

    if (sideNavigationStyle) {
      classNameArr.push(classes.MenuIconPos);
    }

    return (
      <React.Fragment>
        <div
          className={classNameArr.join(" ")}
          ref={(menuIcon) => (this.menuIcon = menuIcon)}
          onClick={this.sideNavigationStyleHandler}
        >
          <div className={classes.FirstLine}></div>
          <div className={classes.SecondLine}></div>
          <div className={classes.ThirdLine}></div>
        </div>
        <Navigations />
        <SideNavigation
          sideNavigationStyle={sideNavigationStyle}
          gsapAnimation={itemsGsapAnimationSideNavigation}
          newNavigationStyle={newNavigationStyle}
        />
        <main>{children}</main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sideNavigationStyle: state.layout.sideNavigationStyle,
    newNavigationStyle: state.navigations.newStyleOfNavigation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    iconGsapAnimation: (icon, tl) =>
      dispatch(actions.sideNavigationIconGsapAnimation(icon, tl)),
    itemsGsapAnimationSideNavigation: (items, tl) =>
      dispatch(actions.itemsGsapAnimation(items, tl)),
    sideNavigationStyleFunc: () => dispatch(actions.sideNavigationStyle()),
    menuIconGsapAnimation: (
      sideNavigationStyle,
      firstLine,
      secondLine,
      thirdLine,
      tl
    ) =>
      dispatch(
        actions.menuIconGsapAnimation(
          sideNavigationStyle,
          firstLine,
          secondLine,
          thirdLine,
          tl
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
