export const aboutOurCompanyGsapAnimation = (
  leftContent,
  rightContent,
  mauveShape,
  tl
) => {
  return (dispatch) => {
    return tl
      .from(
        leftContent,
        1.3,
        { x: -40, opacity: 0, ease: "power4.out", stagger: 0.3 },
        "+=0.2"
      )
      .from(
        rightContent,
        0.6,
        { y: 30, opacity: 0, ease: "power3.out", stagger: 0.2 },
        "-=1.2"
      )
      .from(
        mauveShape,
        1.4,
        { opacity: 0, x: 20, y: 30, ease: "power3.out" },
        "-=0.5"
      );
  };
};
