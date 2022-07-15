module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gold": "#ffd700"
      },
      keyframes: {
        "fade-down": {
          "0%": {
            "opacity": "0",
            "transform": "translateY(-20px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateY(0)"
          }
        },
        "fade-up": {
          "0%": {
            "opacity": "0",
            "transform": "translateY(20px)"
          },
          "50%": {
            "opacity": "0.3",
            "transform": "translateY(10px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateY(0)"
          }
        }
      },
      animation: {
        "fade-down-1": "fade-down 6s ease-out",
        "fade-down-2": "fade-down 7.5s ease-out",
        "fade-down-3": "fade-down 9s ease-out",
        "fade-down-4": "fade-down 10.5s ease-out",
        "fade-up-1": "fade-up 6s ease-out",
        "fade-up-2": "fade-up 7.5s ease-out",
        "fade-up-3": "fade-up 9s ease-out",
        "fade-up-4": "fade-up 10.5s ease-out",
        "fade-up-5": "fade-up 12s ease-out",
      }
    },
  },
  plugins: []
}