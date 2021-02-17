import * as actionType from "./actionType";
import { header } from "../../share/gsapAnimation";

export const contactUsGsapAnimation = (head, arrOfContent, tl) => {
  return (dispatch) => {
    return tl
      .from(head, 1, header(), "+=0.2")
      .from(
        arrOfContent,
        1,
        { opacity: 0, x: -20, ease: "power2.out", stagger: 0.2 },
        "-=0.9"
      );
  };
};

export const formValidationHandler = (value, inputNames) => {
  return {
    type: actionType.FORM_VALIDATION,
    value: value,
    inputNames: inputNames,
  };
};
