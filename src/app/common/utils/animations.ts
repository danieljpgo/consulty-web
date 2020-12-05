export const fadeInOut = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

export const fadeInUp = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  out: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const fadeInDown = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  out: {
    y: -30,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const upInOut = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: -20,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  out: {
    opacity: 0,
    scale: 0.85,
    y: -20,
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
};

export const staggerX = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const stagger = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  out: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};
