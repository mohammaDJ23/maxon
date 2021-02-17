import React from "react";
import { connect } from "react-redux";
import { TimelineLite } from "gsap";
import PallidText from "../Ui/PallidText/PallidText";
import getStyleElement from "../../share/getStyleElement";
import * as actions from "../../store/actions/index";
import classes from "./Footer.module.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.footer = null;
    this.gsapAnimation = null;
  }

  componentDidMount() {
    getStyleElement(this.footer, this.gsapAnimationHandler);
  }

  gsapAnimationHandler = () => {
    const tl = new TimelineLite();
    this.gsapAnimation = this.props.gsapAnimation(this.footer, tl);
  };

  render() {
    return (
      <footer
        className={classes.FooterSections}
        ref={(footer) => (this.footer = footer)}
      >
        <div className={classes.Container}>
          <div className={classes.Content}>
            <PallidText>
              Copyright © 2019 <span>themeies.com</span> All Rights Reserved
            </PallidText>
          </div>
        </div>
      </footer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gsapAnimation: (footer, tl) =>
      dispatch(actions.footerGsapAnimation(footer, tl)),
  };
};

export default connect(null, mapDispatchToProps)(Footer);
