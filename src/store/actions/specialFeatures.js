import { header, allItems } from "../../share/gsapAnimation";

export const specialFeaturesGsapAnimation = (head, items, greenShape, tl) => {
  return (dispatch) => {
    return tl
      .from(head, 1, header(), "+=0.2")
      .from(items, 1, allItems(), "-=0.5")
      .from(
        greenShape,
        1.4,
        { opacity: 0, x: -20, y: -30, ease: "power3.out" },
        "-=0.7"
      );
  };
};
