import { ease } from "./ease";

export const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

export const presenceAnim = (variants, state) => {
  return {
    initial: "initial",
    animate: state ? "animate" : "initial",
    variants,
  };
};

export const LoaderAnim = {
  wrapper: {
    initial: {
      clipPath: "inset(0% 0% 100% 0%)",
    },
    animate: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        delay: 1,
        duration: 0.5,
      },
    },
    exit: {
      clipPath: "inset(0% 0% 100% 0%)",
    },
  },
};

export const WordsAnim = {
  initial: {
    opacity: 0,
  },
  animate: ({ id, duration }) => ({
    opacity: 1,
    transition: {
      duration,
      delay: id * 0.05,
    },
  }),
  exit: {
    opacity: 0,
  },
};

export const MenuAnim = {
  presenceMenu: {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: ease.outQuint,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        scale: {
          ease: ease.inOutQuint,
          duration: 0.6,
          delay: 0.2,
        },
        opacity: {
          ease: [0.88, 0.05, 0.1, 0.97],
          duration: 0.6,
          delay: 0.3,
        },
      },
    },
  },
  opacityPresence: ({ animateDelay = 0 , exitDelay=0 }) => {
    return {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          delay: animateDelay
        }
      },
      exit: {
        opacity: 0,
        transition: {
          delay: exitDelay,
          // delay: 0.55,
        },
      },
    };
  },
  link: {
    initial: {
      opacity: 0,
    },
    animate: (id) => ({
      opacity: 1,
      transition: {
        duration: 0.05,
        delay: (id + 1) * 0.03 + 0.25,
      },
    }),
    exit: {
      opacity: 0,
    },
  },
};
