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
      duration: 0.2,
      ease: 'easeOut',
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
