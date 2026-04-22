/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1.2s ease-out",
        "slide-up": "slideUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "bounce-slow": "bounce 3s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
