import React from "react";
import { connect } from "react-redux";
import ContentContainer from "../Ui/ContentContainer/ContentContainer";
import LeftContent from "./LeftContent/LeftContent";
import MiddleContent from "./MiddleContent/MiddleContent";
import RightContent from "./RightContent/RightContent";
import * as actions from "../../store/actions/index";
import classes from "./CreativeAgency.module.css";

class CreativeAgency extends React.Component {
  constructor(props) {
    super(props);
    this.header = null;
    this.contentContainer = null;
  }

  componentDidMount() {
    this.resizeEventHandler();
    this.getAllStylesHandler();
    window.addEventListener("resize", this.resizeEventHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeEventHandler);
  }

  getAllStylesHandler = () => {
    const { getStyleForThreeContent, getStyleForTwoContent } = this.props;
    const [widths, height] = this.getAllStyles();

    if (widths.length < 3) {
      getStyleForTwoContent(widths, height);
    } else {
      getStyleForThreeContent(widths, height);
    }
  };

  getAllStyles = () => {
    const styles = getComputedStyle(this.contentContainer);
    const gridTemplateColumns = styles.gridTemplateColumns.split("px");
    const widths = gridTemplateColumns.map((item) => parseInt(item));
    widths.pop();
    const height = parseInt(styles.gridTemplateRows);

    if (widths && height) {
      return [widths, height];
    }
  };

  resizeEventHandler = () => {
    const {
      hideLeftContentFunc,
      showLeftContentFunc,
      hideShapeOnMiddleAndSvgRightContentFunc,
      showShapeOnMiddleAndSvgRightContentFunc,
      setHeightOfHeaderFunc,
      hideRightContentFunc,
      showRightContentFunc,
    } = this.props;

    if (window.innerWidth <= 1380) {
      hideLeftContentFunc();
    } else {
      showLeftContentFunc();
    }

    if (window.innerWidth <= 1200) {
      hideShapeOnMiddleAndSvgRightContentFunc();
    } else {
      showShapeOnMiddleAndSvgRightContentFunc();
    }

    if (window.innerWidth <= 460) {
      hideRightContentFunc();
    } else {
      showRightContentFunc();
    }

    const getHeaderStyle = getComputedStyle(this.header).getPropertyValue(
      "height"
    );

    const heightOfHeader = parseInt(getHeaderStyle);
    setHeightOfHeaderFunc(heightOfHeader);
  };

  render() {
    const {
      showLeftContent,
      showShapeOnMiddleAndRightContent,
      leftContentWidth,
      showRightContent,
      middleContentWidth,
      rightContentWidth,
      height,
      leftContentGsapAnimation,
      orangeShapeLeftContent,
      pinkShapeLeftContent,
      mauveShapeLeftContent,
      orangeShapeStyleLeftContent,
      pinkShapeStyleLeftContent,
      mauveShapeStyleLeftContent,
      middleContentGsapAnimation,
      pinkShapeMiddleContent,
      pinkShapeStyleMiddleContent,
      rightContentGsapAnimation,
      orangeShapeRightContent,
      blueShapeRightContent,
      hepaticShapeRightContent,
      orangeShapeStyleRightContent,
      blueShapeStyleRightContent,
      hepaticShapeStyleRightContent,
      paths,
      pathStyleRightContent,
    } = this.props;

    return (
      <header
        id="home"
        className={classes.CreativeAgencySection}
        ref={(header) => (this.header = header)}
      >
        <div className={classes.Container}>
          <ContentContainer
            stylename={classes.ContentContainer}
            ref={(contentContainer) =>
              (this.contentContainer = contentContainer)
            }
          >
            <LeftContent
              showLeftContent={showLeftContent}
              leftContentWidth={leftContentWidth}
              height={height}
              gsapAnimation={leftContentGsapAnimation}
              orangeShape={orangeShapeLeftContent}
              pinkShape={pinkShapeLeftContent}
              mauveShape={mauveShapeLeftContent}
              orangeShapeStyleLeftContent={orangeShapeStyleLeftContent}
              pinkShapeStyleLeftContent={pinkShapeStyleLeftContent}
              mauveShapeStyleLeftContent={mauveShapeStyleLeftContent}
            />
            <MiddleContent
              showShapeOnMiddleAndRightContent={
                showShapeOnMiddleAndRightContent
              }
              middleContentWidth={middleContentWidth}
              height={height}
              gsapAnimation={middleContentGsapAnimation}
              pinkShape={pinkShapeMiddleContent}
              pinkShapeStyleMiddleContent={pinkShapeStyleMiddleContent}
            />
            <RightContent
              showRightContent={showRightContent}
              showShapeOnMiddleAndRightContent={
                showShapeOnMiddleAndRightContent
              }
              rightContentWidth={rightContentWidth}
              height={height}
              gsapAnimation={rightContentGsapAnimation}
              orangeShape={orangeShapeRightContent}
              blueShape={blueShapeRightContent}
              hepaticShape={hepaticShapeRightContent}
              orangeShapeStyleRightContent={orangeShapeStyleRightContent}
              blueShapeStyleRightContent={blueShapeStyleRightContent}
              hepaticShapeStyleRightContent={hepaticShapeStyleRightContent}
              pathStyleRightContent={pathStyleRightContent}
              paths={paths}
            />
          </ContentContainer>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showLeftContent: state.creativeAgency.showLeftContent,
    showShapeOnMiddleAndRightContent:
      state.creativeAgency.showShapeOnMiddleAndRightContent,
    showRightContent: state.creativeAgency.showRightContent,
    leftContentWidth: state.creativeAgency.leftContentWidth,
    middleContentWidth: state.creativeAgency.middleContentWidth,
    rightContentWidth: state.creativeAgency.rightContentWidth,
    height: state.creativeAgency.height,
    orangeShapeLeftContent: state.creativeAgency.shapes.leftContent.orangeShape,
    pinkShapeLeftContent: state.creativeAgency.shapes.leftContent.pinkShape,
    mauveShapeLeftContent: state.creativeAgency.shapes.leftContent.mauveShape,
    pinkShapeMiddleContent: state.creativeAgency.shapes.middleContent.pinkShape,
    orangeShapeRightContent:
      state.creativeAgency.shapes.rightContent.orangeShape,
    blueShapeRightContent: state.creativeAgency.shapes.rightContent.blueShape,
    hepaticShapeRightContent:
      state.creativeAgency.shapes.rightContent.hepaticShape,
    paths: state.creativeAgency.shapes.rightContent.paths,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHeightOfHeaderFunc: (height) =>
      dispatch(actions.setHeightOfHeader(height)),
    getStyleForThreeContent: (widths, height) =>
      dispatch(actions.getStyleForThreeContent(widths, height)),
    getStyleForTwoContent: (widths, height) =>
      dispatch(actions.getStyleForTwoContent(widths, height)),
    hideLeftContentFunc: () => dispatch(actions.hideLeftContent()),
    showLeftContentFunc: () => dispatch(actions.showLeftContent()),
    leftContentGsapAnimation: (item, tl) =>
      dispatch(actions.leftContentGsapAnimation(item, tl)),
    orangeShapeStyleLeftContent: (randomWidth, randomheight, randomColors) =>
      dispatch(
        actions.orangeShapeStyleLeftContent(
          randomWidth,
          randomheight,
          randomColors
        )
      ),
    pinkShapeStyleLeftContent: (randomWidth, randomheight) =>
      dispatch(actions.pinkShapeStyleLeftContent(randomWidth, randomheight)),
    mauveShapeStyleLeftContent: (randomWidth, randomheight) =>
      dispatch(actions.mauveShapeStyleLeftContent(randomWidth, randomheight)),
    hideShapeOnMiddleAndSvgRightContentFunc: () =>
      dispatch(actions.hideShapeOnMiddleAndSvgRightContent()),
    showShapeOnMiddleAndSvgRightContentFunc: () =>
      dispatch(actions.showShapeOnMiddleAndSvgRightContent()),
    pinkShapeStyleMiddleContent: (randomWidth, randomheight) =>
      dispatch(actions.pinkShapeStyleMiddleContent(randomWidth, randomheight)),
    middleContentGsapAnimation: (items, button, span, tl) =>
      dispatch(actions.middleContentGsapAnimation(items, button, span, tl)),
    showRightContentFunc: () => dispatch(actions.showRightContent()),
    hideRightContentFunc: () => dispatch(actions.hideRightContent()),
    rightContentGsapAnimation: (items, svg, tl) =>
      dispatch(actions.rightContentGsapAnimation(items, svg, tl)),
    orangeShapeStyleRightContent: (randomWidth, randomheight) =>
      dispatch(actions.orangeShapeStyleRightContent(randomWidth, randomheight)),
    blueShapeStyleRightContent: (randomWidth, randomheight) =>
      dispatch(actions.blueShapeStyleRightContent(randomWidth, randomheight)),
    hepaticShapeStyleRightContent: (randomWidth, randomheight) =>
      dispatch(
        actions.hepaticShapeStyleRightContent(randomWidth, randomheight)
      ),
    pathStyleRightContent: (randomPath) =>
      dispatch(actions.pathStyleRightContent(randomPath)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreativeAgency);
