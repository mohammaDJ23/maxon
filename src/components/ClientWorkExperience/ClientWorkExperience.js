import React from "react";
import { connect } from "react-redux";
import { TimelineLite } from "gsap";
import Head from "./Head/Head";
import ClientWorkItem from "./Item/Item";
import SectionContainer from "../Ui/SectionContainer/SectionContainer";
import getStyleElement from "../../share/getStyleElement";
import * as actions from "../../store/actions/index";
import classes from "./ClientWorkExperience.module.css";

class ClientWorkExperience extends React.Component {
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
    this.gsapAnimation = this.props.gsapAnimaiton(headChildren, this.item, tl);
  };

  render() {
    const { clientWorkExperienceInfo } = this.props;
    const clientWorkExperience = [];

    for (let key in clientWorkExperienceInfo) {
      const clientWorks = clientWorkExperienceInfo[key];
      clientWorkExperience.push({ ...clientWorks });
    }

    const item = clientWorkExperience.map((item, index) => (
      <ClientWorkItem
        key={index}
        innerRef={(item) => (this.item[index] = item)}
        image={item.image}
        texts={item.texts}
        direction={item.direction}
      />
    ));

    return (
      <SectionContainer
        ref={(sectionContainer) => (this.sectionContainer = sectionContainer)}
        stylename={classes.SectionContainer}
      >
        <Head innerRef={(head) => (this.head = head)} />
        {item ? item : null}
      </SectionContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gsapAnimaiton: (head, item, tl) =>
      dispatch(actions.clientWorkExperienceGsapAnimaiton(head, item, tl)),
  };
};

export default connect(null, mapDispatchToProps)(ClientWorkExperience);
