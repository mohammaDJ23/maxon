import React from "react";
import { connect } from "react-redux";
import Layout from "../../components/Ui/Layout/Layout";
import CreativeAgency from "../../components/CreativeAgency/CreativeAgency";
import AboutOurCompany from "../../components/AboutOurCompany/AboutOurCompany";
import SpecialFeatures from "../../components/SpecialFeatures/SpecialFeatures";
import ClientWorkExperience from "../../components/ClientWorkExperience/ClientWorkExperience";
import Works from "../../components/Works/Works";
import Testimonials from "../../components/Testimonials/Testimonials";
import TeamMembers from "../../components/TeamMembers/TeamMembers";
import LatestNews from "../../components/LatestNews/LatestNews";
import ContactUs from "../../components/ContactUs/ContactUs";
import Logos from "../../components/Logos/Logos";
import FooterWidgets from "../../components/FooterWidgets/FooterWidgets";
import Footer from "../../components/Footer/Footer";

const home = (props) => (
  <Layout>
    <CreativeAgency />
    <AboutOurCompany />
    <SpecialFeatures specialFeaturesInfo={props.specialFeaturesInfo} />
    <ClientWorkExperience
      clientWorkExperienceInfo={props.clientWorkExperienceInfo}
    />
    <Works works={props.works} />
    <Testimonials />
    <TeamMembers teamMembersInfo={props.teamMembersInfo} />
    <LatestNews latestNewsInfo={props.latestNewsInfo} />
    <ContactUs contactUsInfo={props.contactUsInfo} />
    <Logos logos={props.logos} />
    <FooterWidgets footerWidgetInfo={props.footerWidgetInfo} />
    <Footer />
  </Layout>
);

const mapStateToProps = (state) => {
  return {
    specialFeaturesInfo: state.home.specialFeatures,
    clientWorkExperienceInfo: state.home.clientWorkExperience,
    works: state.home.works,
    teamMembersInfo: state.home.teamMembers,
    latestNewsInfo: state.home.latestNews,
    contactUsInfo: state.home.contactUs,
    logos: state.home.logos,
    footerWidgetInfo: state.home.footerWidget,
  };
};

export default connect(mapStateToProps)(home);
