import * as actionType from "./actionType";

export const leftContentGsapAnimation = (items, tl) => {
  return (dispatch) => {
    return tl.from(items, 0.5, { opacity: 0, stagger: 0.2 }, "+=1");
  };
};

export const middleContentGsapAnimation = (items, button, span, tl) => {
  return (dispatch) => {
    return tl
      .from(items, 1.7, { y: 200, ease: "power4.out", stagger: 0.2 }, "+=0.3")
      .from(button, 1, { opacity: 0, y: 36, ease: "power3.out" }, "-=1.1")
      .from(span, 0.5, { opacity: 0 }, "-=0.7");
  };
};

export const rightContentGsapAnimation = (items, svg, tl) => {
  return (dispatch) => {
    return tl
      .from(items, 0.5, { opacity: 0, stagger: 0.3 }, "+=1.2")
      .from(
        svg,
        2,
        { x: -20, y: -20, opacity: 0, ease: "power4.out" },
        "-=1.3"
      );
  };
};

export const setHeightOfHeader = (height) => {
  return {
    type: actionType.SET_HEIGHT_OF_HEADER,
    height: height,
  };
};

export const hideLeftContent = () => {
  return {
    type: actionType.HIDE_LEFT_CONTENT_OF_CREATIVE_AGENCY,
  };
};

export const showLeftContent = () => {
  return {
    type: actionType.SHOW_LEFT_CONTENT_OF_CREATIVE_AGENCY,
  };
};

export const hideShapeOnMiddleAndSvgRightContent = () => {
  return {
    type: actionType.HIDE_SHAPE_ON_MIDDLE_CONTENT_AND_RIGHT_CONTENT,
  };
};

export const showShapeOnMiddleAndSvgRightContent = () => {
  return {
    type: actionType.SHOW_SHAPE_ON_MIDDLE_CONTENT_AND_RIGHT_CONTENT,
  };
};

export const getStyleForThreeContent = (widths, height) => {
  return {
    type: actionType.GET_STYLE_FOR_THREE_CONTENT,
    widths: widths,
    height: height,
  };
};

export const getStyleForTwoContent = (widths, height) => {
  return {
    type: actionType.GET_STYLE_FOR_TWO_CONTENT,
    widths: widths,
    height: height,
  };
};

export const orangeShapeStyleLeftContent = (
  randomWidth,
  randomHeight,
  randomColors
) => {
  return {
    type: actionType.ORANGE_SHAPE_STYLE_LEFT_CONTENT,
    randomWidth: randomWidth,
    randomHeight: randomHeight,
    randomColors: randomColors,
  };
};

export const pinkShapeStyleLeftContent = (randomWidth, randomHeight) => {
  return {
    type: actionType.PINK_SHAPE_STYLE_LEFT_CONTENT,
    randomWidth: randomWidth,
    randomHeight: randomHeight,
  };
};

export const mauveShapeStyleLeftContent = (randomWidth, randomHeight) => {
  return {
    type: actionType.MAUVE_SHAPE_STYLE_LEFT_CONTENT,
    randomWidth: randomWidth,
    randomHeight: randomHeight,
  };
};

export const pinkShapeStyleMiddleContent = (randomWidth, randomHeight) => {
  return {
    type: actionType.PINK_SHAPE_STYLE_MIDDLE_CONTENT,
    randomWidth: randomWidth,
    randomHeight: randomHeight,
  };
};

export const showRightContent = () => {
  return {
    type: actionType.SHOW_RIGHT_CONTENT,
  };
};

export const hideRightContent = () => {
  return {
    type: actionType.HIDE_RIGHT_CONTENT,
  };
};

export const orangeShapeStyleRightContent = (randomWidth, randomHeight) => {
  return {
    type: actionType.ORANGE_SHAPE_STYLE_RIGHT_CONTENT,
    randomWidth: randomWidth,
    randomHeight: randomHeight,
  };
};

export const blueShapeStyleRightContent = (randomWidth, randomHeight) => {
  return {
    type: actionType.BLUE_SHAPE_STYLE_RIGHT_CONTENT,
    randomWidth: randomWidth,
    randomHeight: randomHeight,
  };
};

export const hepaticShapeStyleRightContent = (randomWidth, randomHeight) => {
  return {
    type: actionType.HEPATIC_SHAPE_STYLE_RIGHT_CONTENT,
    randomWidth: randomWidth,
    randomHeight: randomHeight,
  };
};

export const pathStyleRightContent = (randomPath) => {
  return {
    type: actionType.PATHS_STYLE_RIGHT_CONTENT,
    randomPath: randomPath,
  };
};
