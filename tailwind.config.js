/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A1017",
        foreground: "#F2EFE6",
        raise: "#121B25",
        "raise-2": "#17212C",
        border: "#263241",
        muted: "#A9B3BD",
        gold: {
          DEFAULT: "#CDA354",
          soft: "#E6C477",
        },
        teal: {
          DEFAULT: "#3FCFC0",
          dim: "#1F5F58",
        },
        cream: {
          DEFAULT: "#F5F1E8",
          dark: "#ECE5D3",
        },
        "ink-on-cream": "#171310",
        "muted-on-cream": "#6B6153",
        "border-cream": "#DDD3BA",
      },
      fontFamily: {
        display: ["Spectral", "Georgia", "serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      borderRadius: {
        soft: "6px",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0, 0, 0, 0.45)",
        subtle: "0 2px 12px rgba(0, 0, 0, 0.3)",
      },
      maxWidth: {
        container: "1180px",
      },
      letterSpacing: {
        widest: ".2em",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
