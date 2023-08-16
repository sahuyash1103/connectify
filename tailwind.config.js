/** @type {import('tailwindcss').Config} */

const units = {
  full: "100%",
  "95/": "95%",
  "90/": "90%",
  "85/": "85%",
  "80/": "80%",
  "75/": "75%",
  "70/": "70%",
  "65/": "65%",
  "60/": "60%",
  "50/": "50%",
  "45/": "45%",
  "40/": "40%",
  "35/": "35%",
  "30/": "30%",
  "25/": "25%",
  "20/": "20%",
  "15/": "15%",
  "10/": "10%",
  "5/": "5%",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
        "1900": "1900px",
        "1500": "1500px",
        "900": "900px",
        "800": "800px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "73-69-79": "rgba(73, 69, 79, 0.80)",
        "34-34-34": "rgba(34, 34, 34, 0.90)",
        "0-0-0": "rgba(0, 0, 0, 0.15)",
        "31-31-31": "rgba(31, 31, 31, 0.70)",
        //-----------------------------
        FFF: "#FFF",
        "1A1558": "#1A1558",
        "1E2875": "#1E2875",
        "373B5C": "#373B5C",
        "413B89": "#413B89",
        EBEBEE: "#EBEBEE",
        F0EFFA: "#F0EFFA",
        F8F8FF: "#F8F8FF",
        FFA78D: "#FFA78D",
        BAB6EB: "#BAB6EB",
        CECECE: "#CECECE",
        E8EFF7: "#E8EFF7",
        FFCE10: "#FFCE10",
      },
      boxShadow: {
        1: "0px 3.6px 5.6px 0px rgba(0, 0, 0, 0.15)",
        2: "0px 1.8px 1.8px 0px rgba(0, 0, 0, 0.10)",
        3: "0px 1.5px 3.5px 0px rgba(0, 0, 0, 0.10)",
        4: "0px 8.9px 53.3px 0px rgba(226, 236, 249, 0.50)",
        5: "0px 1.8px 1.8px 0px transparent",
        6: "0px 3.8px 5px 0px rgba(65, 59, 137, 0.10)",
      },
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        30: "30px",
        36: "36px",
      },
      fontWeight: {
        400: 400,
        450: 450,
        500: 500,
        550: 550,
        600: 600,
        650: 650,
      },
      fontFamily: {
        Outfit: "Outfit",
        "Palatino-Linotype": "Palatino Linotype",
        Poppins: "Poppins",
      },
      lineHeight: {
        normal: "normal",
      },
      spacing: {
        ...units,
      },
      width: {
        ...units,
      },
    },
  },
  plugins: [],
};
