import React from "react";
import { connect } from "react-redux";
import { TimelineLite } from "gsap";
import ContentContainer from "../Ui/ContentContainer/ContentContainer";
import Head from "./Head/Head";
import TeamMembersItem from "./Item/Item";
import SectionContainer from "../Ui/SectionContainer/SectionContainer";
import MiddleSectionContainer from "../Ui/MiddleSectionContainer/MiddleSectionContainer";
import getStyleElement from "../../share/getStyleElement";
import * as actions from "../../store/actions/teamMembers";
import classes from "./TeamMembers.module.css";

class TeamMembers extends React.Component {
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

    this.gsapAnimation = this.props.teamMembersGsapAnimation(
      headChildren,
      this.item,
      tl
    );
  };

  render() {
    const { teamMembersInfo } = this.props;
    const team = [];

    for (let key in teamMembersInfo) {
      const teamInfo = teamMembersInfo[key];
      team.push({ ...teamInfo });
    }

    const item = team.map((item, index) => (
      <TeamMembersItem
        key={item.title}
        innerRef={(item) => (this.item[index] = item)}
        image={item.image}
        title={item.title}
        job={item.job}
        community={item.community}
      />
    ));

    return (
      <SectionContainer
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
    teamMembersGsapAnimation: (head, items, tl) =>
      dispatch(actions.teamMembersGsapAnimation(head, items, tl)),
  };
};

export default connect(null, mapDispatchToProps)(TeamMembers);
