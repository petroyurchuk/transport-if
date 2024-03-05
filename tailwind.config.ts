import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        minus: "-100%",
      },
      backgroundSize: {
        big: "300%",
      },
      animation: {
        typing: "typing 2s steps(40,end)",
        gradient: "gradient 5s  infinite alternate-reverse",
        printer: "printer 10s ",
      },
      keyframes: {
        typing: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% " },
          "100%": { backgroundPosition: "100%" },
        },
        printer: {
          "0%": {
            width: "1px",
          },
          "100%": {
            width: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
