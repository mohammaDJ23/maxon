export const addScrollEvent = (scrollEventHandler) => {
  return window.addEventListener("scroll", scrollEventHandler);
};

export const removeScrollEvent = (scrollEventHandler) => {
  return window.removeEventListener("scroll", scrollEventHandler);
};
