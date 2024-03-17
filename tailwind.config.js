module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '100%',
          '2xl': '1400px',
        },
      },
      screens: {
        '2xl': '1400px',
      },
      colors: {
        "primary-green": "#30ad1c",
        "primary-white": "#fff",
        "primary-black": "#000000",
        "primary-orange": "#ff6900",
        "primary-blue": "#1778be",
        "primary-light": "#f6faff"
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      },
      fontSize: {
        s: "14px",
        m: "16px",
        l: "18px"
      }
    },
  },
  plugins: [],
}
