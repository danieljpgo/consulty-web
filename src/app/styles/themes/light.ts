import colors from '../colors';

export const unit = 16;

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
      base: '',
      constrast: colors.white,
    },
    background: colors.gray['300'],
    surface: {
      base: colors.white,
      constrast: colors.gray['100'],
    },
  },

  shapes: {
    borderRadius: unit / 3,
  },

  breakpoints: {
    small: 700,
  },
};
