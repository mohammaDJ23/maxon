import * as actionType from "../actions/actionType";

const allItems = (whichItem) => {
  return {
    opacity: 0,
    x: 10,
    ease: "power4.out",
    stagger: whichItem === "nav" ? -0.2 : 0.1,
  };
};

export const navigationGsapAnimation = (navigationSection, tl) => {
  return (dispatch) => {
    return tl.from(
      navigationSection,
      1.4,
      { height: 0, ease: "power4.out(0.8)" },
      "+=0.2"
    );
  };
};

export const changeColorOfLogo = (colors) => {
  return {
    type: actionType.CHANGE_COLORS_OF_LOGO,
    color: colors,
  };
};

export const itemsGsapAnimation = (items, tl) => {
  return (dispatch) => {
    return tl.from(items, 1.5, allItems("nav"), "+=0.5");
  };
};

export const leftContentNavGsapAnimation = (maxon, tl) => {
  return (dispatch) => {
    return tl.from(
      maxon,
      1.4,
      { x: -30, opacity: 0, ease: "power4.out" },
      "+=0.3"
    );
  };
};

export const sideNavigationGsapAnimation = (items, tl) => {
  return (dispatch) => {
    return tl.from(items, 1.5, allItems(), "+=0.4");
  };
};

export const changeNavigationStyle = () => {
  return {
    type: actionType.CHANGE_NAVIGATION_STYLE,
  };
};

export const defaultNavigationStyle = () => {
  return {
    type: actionType.DEFAULT_NAVIGATION_STYLE,
  };
};
