import colors from '../colors';

export const unit = 1.4;

export default {
  title: 'light',

  unit,

  colors: {
    primary: {
      lighter: colors.purple['300'],
      light: colors.purple['400'],
      main: colors.purple['500'],
      dark: colors.purple['600'],
      darker: colors.purple['700'],
    },
    secundary: {
      main: colors.green['500'],
      dark: colors.green['700'],
    },
    text: {
      base: colors.purple['100'],
      constrast: colors.white,
    },
    title: {
      main: colors.purple['900'],
    },
    background: colors.gray['300'],
    surface: {
      base: colors.white,
      constrast: colors.gray['100'],
      input: colors.gray['400'],
    },
    lines: {
      constrast: colors.gray['200'],
    },
  },

  shapes: {
    borderRadius: 0.4,
  },

  breakpoints: {
    small: 700,
  },
};
