export const worksGsapAnimation = (sectionContainer, items, tl) => {
  return (dispatch) => {
    return tl
      .from(sectionContainer, 0.7, { opacity: 0, y: 50 }, "+=0.2")
      .from(
        items,
        1,
        { opacity: 0, y: 50, ease: "power2.out", stagger: 0.2 },
        "-=0.5"
      );
  };
};
