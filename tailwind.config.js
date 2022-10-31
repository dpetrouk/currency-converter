module.exports = {
  mode : "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: "768px",
      xl: "1280px",
      "2xl": "1600px"
    },
    fontFamily: {
      roboto: [ "Roboto", "sans-serif" ]
    },
    fontSize: {
      10: "10px",
      12: "12px",
      13: "13px",
      14: "14px",
      15: "15px",
      16: "16px",
      17: "17px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      34: "34px",
      36: "36px",
      40: "40px",
      52: "52px"
    },
    colors: {
      primary: "#0F4471",
      secondary: "#EEF5FF",

      gray: "#F8F8F8",
      "azureish-white": "#DFE1F0",
      red: "#E02025",
      "catalina-blue": "#093078",
      gainsboro: "#DFDFDF",

      text: {
        main: "#404456",
        dark: "#2C3A4B",
        gray: {
          300: "#A0A3BD",
          500: "#666666",
          700: "#343434",
          900: "#1C1C1C",
          950: "#111111"
        }
      },

      background: "#FFFFFF",
      black: "#000000",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        xl: "4rem",
        "2xl": "10rem"
      }
    },
    extend: {
      spacing: {
        min: "min-content",
        4.5: "1.125rem", // 18px
        5.5: "1.375rem", // 22px
        6.5: "1.625rem", // 26px
        7.5: "1.875rem", // 30px
        8.5: "2.125rem", // 34px
        9.5: "2.375rem", // 38px
        10.5: "2.625rem", // 42px
        13: "3.25rem", // 52px
        18: "4.5rem", // 72px
        22: "5.5rem", // 88px
        26: "6.5rem", // 104px
        27: "6.8125rem", // 109px
        29: "7.25rem", // 116px
        30: "7.5rem", // 120px
      },
      gridTemplateColumns: {
        "fr-auto": "1fr auto",
      },
      gridTemplateRows: {
        "fr-auto": "1fr auto",
        "auto-2": "repeat(2, auto)",
        "auto-3": "repeat(3, auto)",
      },
      borderRadius: {
        "2.25xl": "1.125rem", // 18px
        "2.5xl": "1.25rem", // 20px
        "4xl": "2rem", // 32px
      },
      backgroundSize: {
        "8": "0.5rem", // 8px
        "10": "0.625rem", // 10px
      },
      lineHeight: {
        3.5: "0.875rem", // 14px
        4.5: "1.125rem", // 18px
        7.5: "1.875rem", // 30px
        12: "3rem", // 48px
        15: "3.75rem", // 60px
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
