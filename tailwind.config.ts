/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
          "text-flicker-in-glow": "text-flicker-in-glow 2s linear   both",
          "scale-up-center": "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)  both",
          "arrow-move": "arrow-move 1s ease-in-out infinite",
      },
      keyframes: {
          "text-flicker-in-glow": {
              "0%": {
                  opacity: "0"
              },
              "10%,10.2%,20%,20.6%,30%,30.6%,45%,55.1%,57%,60.1%,65%,75.1%,77%,85.1%,86%": {
                  opacity: "0",
                  "text-shadow": "none"
              },
              "10.1%": {
                  opacity: "1",
                  "text-shadow": "none"
              },
              "20.1%": {
                  opacity: "1",
                  "text-shadow": "0 0 30px rgba(255, 255, 255, .25)"
              },
              "30.1%,30.5%,45.1%,50%,55%": {
                  opacity: "1",
                  "text-shadow": "0 0 30px rgba(255, 255, 255, .45), 0 0 60px rgba(255, 255, 255, .25)"
              },
              "57.1%,60%": {
                  opacity: "1",
                  "text-shadow": "0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .35)"
              },
              "65.1%,75%": {
                  opacity: "1",
                  "text-shadow": "0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .35), 0 0 100px rgba(255, 255, 255, .1)"
              },
              "77.1%,85%": {
                  opacity: "1",
                  "text-shadow": "0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .4), 0 0 110px rgba(255, 255, 255, .2), 0 0 100px rgba(255, 255, 255, .1)"
              },
              "86.1%,to": {
                  opacity: "1",
                  "text-shadow": "0 0 30px rgba(255, 255, 255, .6), 0 0 60px rgba(255, 255, 255, .45), 0 0 110px rgba(255, 255, 255, .25), 0 0 100px rgba(255, 255, 255, .1)"
              }
          },
          "scale-up-center": {
            "0%": {
                transform: "scale(.5)"
            },
            to: {
                transform: "scale(1)"
            },
         },
         "arrow-move": {
            "0%": {
                opacity: "1",
                bottom: "1%",
            },
            "50%": {
                bottom: "3%",
                opacity: "0.7",
            },
            "100%": {
                opacity: "1",
                bottom: "1%",
            },
         },
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
        const newUtilities = {
          ".horizontal-tb": {
            writingMode: "horizontal-tb",
          },
          ".vertical-rl": {
            writingMode: "vertical-rl",
          },
          ".vertical-lr": {
            writingMode: "vertical-lr",
          },
        };
        addUtilities(newUtilities);
      },
  ],
};

