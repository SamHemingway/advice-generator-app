export const CSS_VARS = {
  colour: {
    primary: {
      700: "#53FFAA",
    },

    mono: {
      100: "#202733",
      200: "#313A48",
      400: "#4F5D74",
      700: "#CEE3E9",
    },
  },

  font: {
    family: {
      body: `'Manrope', sans-serif`,
    },
    weight: {
      bold: 800,
    },
    size: {
      desktop: {
        s: "0.8125rem",
        m: "1.75rem",
      },

      s: "0.6875rem",
      m: "1.5rem",
    },
  },

  size: {
    m: `24px`,
    l: `40px`,
    xl: `48px`,
    xxl: `64px`,
  },

  shadow: {
    main: `0px 0px 80px rgba(0, 0, 0, 0.100202)`,
    glow: `0px 0px 40px var(--colour-primary-700)`,
  },

  border: {
    m: "0.9375rem",
  },
};

export const mediaQueries = {
  tablet: `@media (min-width: 500px)`,
};
