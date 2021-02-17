const getStyleElement = (element, callback) => {
  new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        callback && callback();
        observer.unobserve(entry.target);
      } else {
        entry.target.style.opacity = 0;
      }
    },
    { threshold: 0.2 }
  ).observe(element);
};

export default getStyleElement;
