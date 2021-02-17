export const footerGsapAnimation = (footer, tl) => {
  return (dispatch) => {
    return tl.from(footer, 0.7, { opacity: 0, y: 50 }, "+=0.2");
  };
};
