import { header } from "../../share/gsapAnimation";

export const footerWidgetsGsapAnimation = (sectionContainer, items, tl) => {
  return (dispatch) => {
    return tl
      .from(sectionContainer, 0.7, { opacity: 0, y: 50 }, "+=0.2")
      .from(items, 1, header(), "-=0.6");
  };
};
