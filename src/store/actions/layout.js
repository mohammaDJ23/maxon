import * as actionType from "../actions/actionType";

export const sideNavigationIconGsapAnimation = (icon, tl) => {
  return (dispatch) => {
    return tl.from(
      icon,
      0.5,
      { opacity: 0, x: -30, ease: "back", stagger: -0.2 },
      "+=1"
    );
  };
};

export const sideNavigationStyle = () => {
  return {
    type: actionType.SIDE_NAVIGATION_STYLE,
  };
};

export const menuIconGsapAnimation = (
  sideNavigationStyle,
  firstLine,
  secondLine,
  thirdLine,
  tl
) => {
  return (dispatch) => {
    return sideNavigationStyle
      ? tl.to([firstLine, secondLine, thirdLine], 1, {
          transform: "translate(0, 0) rotate(0)",
          opacity: 1,
        })
      : tl
          .to(firstLine, 1, {
            transform: "translate(3px, 7.5px) rotate(45deg)",
          })
          .to(secondLine, 1, { opacity: 0 }, "-=1")
          .to(
            thirdLine,
            1,
            { transform: "translate(3px, -10px) rotate(-45deg)" },
            "-=1"
          );
  };
};
