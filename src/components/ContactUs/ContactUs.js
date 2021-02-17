import React from "react";
import { TimelineLite } from "gsap";
import { connect } from "react-redux";
import ContentContainer from "../Ui/ContentContainer/ContentContainer";
import LeftContent from "./LeftContent/LeftContent";
import SectionContainer from "../Ui/SectionContainer/SectionContainer";
import MiddleSectionContainer from "../Ui/MiddleSectionContainer/MiddleSectionContainer";
import Button from "./Button/Button";
import RightContent from "./RightContent/RightContent";
import getStyleElement from "../../share/getStyleElement";
import PallidText from "../Ui/PallidText/PallidText";
import * as actions from "../../store/actions/index";
import classes from "./ContactUs.module.css";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.sectionContainer = null;
    this.head = null;
    this.rightContent = [];
    this.button = null;
    this.gsapAnimation = null;
  }

  componentDidMount() {
    getStyleElement(this.sectionContainer, this.gsapAnimationHandler);
  }

  gsapAnimationHandler = () => {
    const headChildren = this.head.children;
    const tl = new TimelineLite();

    this.gsapAnimation = this.props.gsapAnimation(
      headChildren,
      [this.rightContent, this.button],
      tl
    );
  };

  changehandler = (event, inputNames) => {
    const value = event.target.value;
    this.props.formValidationHandler(value, inputNames);
  };

  render() {
    const { inputs, locationInformation } = this.props.contactUsInfo;
    const contactUsInputs = [];
    const contactUsLocation = [];

    for (let key in inputs) {
      const contactUs = inputs[key];

      contactUsInputs.push({
        id: key,
        config: contactUs,
      });
    }

    for (let key in locationInformation) {
      const locationInfo = locationInformation[key];
      contactUsLocation.push({ ...locationInfo });
    }

    const rightContent = contactUsInputs.map((item, index) => (
      <RightContent
        key={index}
        innerRef={(rightContent) => (this.rightContent[index] = rightContent)}
        elementType={item.config.elementType}
        elementConfig={item.config.elementConfig}
        value={inputs[item.id].value}
        touch={inputs[item.id].touch}
        valid={inputs[item.id].valid}
        clicked={(event) => this.changehandler(event, item.id)}
      />
    ));

    const locationInfo = contactUsLocation.map((item, index) => (
      <PallidText key={index}>
        <img src={item.icon} alt="icon" /> {item.title}
      </PallidText>
    ));

    return (
      <SectionContainer
        id="contact"
        ref={(sectionContainer) => (this.sectionContainer = sectionContainer)}
      >
        <MiddleSectionContainer>
          <ContentContainer stylename={classes.ContentContainer}>
            <LeftContent
              innerRef={(head) => (this.head = head)}
              locationInfo={locationInfo ? locationInfo : null}
            />
            <form className={classes.Form}>
              {rightContent ? rightContent : null}
              <Button innerRef={(button) => (this.button = button)} />
            </form>
          </ContentContainer>
        </MiddleSectionContainer>
      </SectionContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formValidationHandler: (value, inputNames) =>
      dispatch(actions.formValidationHandler(value, inputNames)),
    gsapAnimation: (head, arrOfContent, tl) =>
      dispatch(actions.contactUsGsapAnimation(head, arrOfContent, tl)),
  };
};

export default connect(null, mapDispatchToProps)(ContactUs);
