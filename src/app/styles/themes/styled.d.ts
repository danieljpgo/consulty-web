import 'styled-components';

interface Colors {
  primary: {
    lighter: string,
    light: string,
    main: string,
    dark: string,
    darker: string,
  },
  secundary: {
    main: string,
    dark: string,
  },
  background: string,
  surface: {
    base: string,
    constrast: string,
    input: string,
  },
  lines: {
    constrast: string,
  },
  text: {
    base: string,
    constrast: string,
  },
  subtext: {
    base: string,
  },
  title: {
    main: string,
    base: string,
  }
}

interface Shapes {
  borderRadius: number,
}

interface Breakpoints {
  small: number,
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    unit: number,
    colors: Colors,
    shapes: Shapes,
    breakpoints: Breakpoints,
  }
}
