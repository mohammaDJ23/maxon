import { header, allItems } from "../../share/gsapAnimation";

export const teamMembersGsapAnimation = (head, items, tl) => {
  return (dispatch) => {
    return tl
      .from(head, 1, header(), "+=0.2")
      .from(items, 1, allItems(), "-=0.5");
  };
};
