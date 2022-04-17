export const fadeIn = {
  offscreen: {
    y: 30,
    opacity: 0,
    transition: {
      type: "ease-in-out",
      duration: 0.5,
      delay: 0.5,
    },
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export const itemFadeIn = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
  },
};
