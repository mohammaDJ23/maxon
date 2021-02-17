import React from "react";
import { connect } from "react-redux";
import { TimelineLite } from "gsap";
import { Link } from "react-scroll";
import * as actions from "../../../../store/actions/index";
import classes from "./Items.module.css";

const navigationsItems = [
  "HOME",
  "ABOUT",
  "FEATURES",
  "PROJECTS",
  "BLOG",
  "CONTACT",
];

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.item = [];
    this.gsapAnimation = null;
  }

  componentDidMount() {
    this.gsapAnimationHandler();
  }

  componentDidUpdate(prevProps) {
    const { sideNavigationStyle, sideNavigationGsapAnimation } = this.props;

    if (prevProps.sideNavigationStyle !== sideNavigationStyle) {
      if (sideNavigationStyle) {
        const tl = new TimelineLite();
        this.gsapAnimation = sideNavigationGsapAnimation(this.item, tl);
      }
    }
  }

  gsapAnimationHandler = () => {
    if (this.props.showShapeOnMiddleAndRightContent) {
      const tl = new TimelineLite();
      this.gsapAnimation = this.props.gsapAnimation(this.item, tl);
    }
  };

  render() {
    const navigation = navigationsItems.map((item, index) => {
      const target = item.toLowerCase();

      let setOffset =
        target === "home"
          ? 0
          : target === "about"
          ? -85
          : target === "features" || target === "blog"
          ? -150
          : target === "projects"
          ? -240
          : target === "contact"
          ? -180
          : null;

      if (!this.props.showShapeOnMiddleAndRightContent) {
        setOffset = target === "home" ? 0 : target === "projects" ? -95 : -30;
      }

      return (
        <li
          key={index}
          className={`${classes.Li} ${this.props.stylename}`}
          ref={(li) => (this.item[index] = li)}
        >
          <Link
            to={`${item.toLowerCase()}`}
            spy={true}
            smooth={true}
            offset={setOffset}
            duration={1500}
          >
            {item}
          </Link>
        </li>
      );
    });

    return navigation ? navigation : null;
  }
}

const mapStateToProps = (state) => {
  return {
    sideNavigationStyle: state.layout.sideNavigationStyle,
    showShapeOnMiddleAndRightContent:
      state.creativeAgency.showShapeOnMiddleAndRightContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sideNavigationGsapAnimation: (items, tl) =>
      dispatch(actions.sideNavigationGsapAnimation(items, tl)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
