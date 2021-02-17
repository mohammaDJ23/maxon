import { header } from "../../share/gsapAnimation";

export const clientWorkExperienceGsapAnimaiton = (head, item, tl) => {
  return (dispatch) => {
    return tl
      .from(head, 1, header(), "+=0.2")
      .from(
        item,
        1,
        { opacity: 0, y: 70, ease: "power1.out", stagger: 0.2 },
        "-=0.5"
      );
  };
};
