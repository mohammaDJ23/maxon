import { allItems } from "../../share/gsapAnimation";

export const logosGsapAnimaiton = (items, tl) => {
  return (dispatch) => {
    return tl.from(items, 1, allItems(), "+=0.6");
  };
};
