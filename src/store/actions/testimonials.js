import * as actionType from "../actions/actionType";
import { header, allItems } from "../../share/gsapAnimation";

export const testimonialsGsapAnimation = (
  head,
  leftContent,
  rightContent,
  tl
) => {
  return (dispatch) => {
    return tl
      .from(head, 1, header(), "+=0.2")
      .from(leftContent, 1, allItems(), "-=0.6")
      .from(rightContent, 1, allItems(), "-=0.8");
  };
};

export const setProfileLengthAndTranslate = (translate, profileLength) => {
  return {
    type: actionType.SET_PROFILE_LENGTH_AND_TRANSLATE,
    profileTranslateX: translate[0],
    textTranslateX: translate[1],
    profileLength: profileLength,
  };
};

export const leftArrowControl = ([width, height]) => {
  return {
    type: actionType.LEFT_ARROW_CONTROL,
    moveLeft: width,
    moveTop: height,
  };
};

export const rightArrowControl = ([width, height]) => {
  return {
    type: actionType.RIGHT_ARROW_CONTROL,
    moveRight: width,
    moveBottom: height,
  };
};
