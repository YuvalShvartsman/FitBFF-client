/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      light: "#ffffff",
      dark: "#131f24",
      blue: {
        100: "#090088",
        200: "#02006c",
        300: "#010057",
        400: "#010048",
        500: "#03002e",
      },
      gold: {
        100: "#ffd700",
        200: "#ffc300",
        300: "#ffb100",
        400: "#ffa000",
        500: "#ff8f00",

      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      green: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
    },
    fontFamily: {
      sans: ["Segoe UI", "Arial", "sans-serif"],
      serif: ["Georgia", "serif"],
      mono: ["Courier New", "monospace"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },
    extend: {
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        28: "7rem",
        36: "9rem",
        44: "11rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
        golden: "0 0 10px rgba(255, 215, 0, 0.6) inset",
        blue: "0 0 10px rgba(0, 0, 0, 0.3) inset",
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 }
        }
      },
      animation: {
        sparkle: 'sparkle 1.5s ease-in-out infinite'
      }
    }
  },
  plugins: [
    require("tailwindcss-motion"),
  ],
};
