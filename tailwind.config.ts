import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-gray": "#1e1e1e",
        gray: {
          "100": "#7a7a7a",
          "200": "#797979",
          "300": "#121212",
        },
        white: "#fff",
        darkorange: {
          "100": "#fd6f00",
          "200": "rgba(253, 111, 0, 0.6)",
        },
        orangered: "#e35700",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#edecec",
        },
        darkgray: "#afafaf",
        gainsboro: {
          "100": "#dedede",
          "200": "#d9d9d9",
        },
        black: "#000",
        darkslategray: "#424242",
        antiquewhite: "#ffebdb",
        dimgray: "#545454",
        snow: "#fff8f8",
      },
      spacing: {},
      fontFamily: {
        "nav-bar-text-21": "Poppins",
        montserrat: "Montserrat",
      },
      borderRadius: {
        sm: "14px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "2xl": "21px",
      mid: "17px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "5xl": "24px",
      "46xl": "65px",
      "33xl": "52px",
      "20xl": "39px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      "81xl": "100px",
      "31xl": "50px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq1875: {
        raw: "screen and (max-width: 1875px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      sm: {
        max: "420px",
      },
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  corePlugins: {
    preflight: false,
  },
};

export default config;
