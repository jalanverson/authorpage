const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-900": "#0f265c",
        "blue-footer": "#f5f8ff",
        "blue-background-200": "#d3e3fd",
      },
      fontFamily: {
        roboto: ["Roboto", "Helvetica", "sans-serif"],
      },
    },
    fontSize: {
      h1xxl: [
        '62px',
        {
          lineHeight: '68px',
          letterSpacing: '-2px',
          fontWeight: '500',
        }
      ],
      h1xl: [
        '52px',
        {
          lineHeight: '62px',
          letterSpacing: '-2px',
          fontWeight: '500',
        }
      ],
      h1lg: [
        '42px',
        {
          lineHeight: '52px',
          letterSpacing: '-1.75px',
          fontWeight: '500',
        }
      ],
      h1: [
        '36px',
        {
          lineHeight: '42px',
          letterSpacing: '-1.75px',
          fontWeight: '500',
        }
      ],
      h2: [
        '30px',
        {
          lineHeight: '36px',
          letterSpacing: '-1.5px',
          fontWeight: '500',
        }
      ],
      h3: [
        '25px',
        {
          lineHeight: '30px',
          letterSpacing: '-1px',
          fontWeight: '500',
        }
      ],
      h4: [
        '20px',
        {
          lineHeight: '28px',
          letterSpacing: '0.25px',
        }
      ],
      p1: [
        '20px',
        {
          lineHeight: '28px',
          letterSpacing: '0.25px',
        }
      ],
      p2: [
        '17px',
        {
          lineHeight: '26px',
          letterSpacing: '0.25px',
        }
      ],
      p3: [
        '14px',
        {
          lineHeight: '21px',
          letterSpacing: '1.5px',
        }
      ],
      
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      headline: ["64px", "72px"],
      subhead: ["32px", "40px"],
    },
    fontWeight: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
  },
  container: {
    // you can configure the container to be centered
    center: true,

    // or have default horizontal padding
    padding: "1rem",

    // default breakpoints but with 40px removed
    screens: {
      sm: "600px",
      md: "728px",
      lg: "984px",
      xl: "1240px",
      "2xl": "1496px",
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        p: { margin: "12px 0" },
      });
    }),
  ],
};
