// tailwind.config.js
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: ['class', '[data-theme="darktheme"]'],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1920px",
      },
      colors:{
        primary: "rgba(var(--primary))",
        "color-cta": "rgba(var(--color-cta))",
        accent: "rgba(var(--accent))",
        neutral: "rgba(var(--neutral))",
        "base-100": "rgba(var(--base-100))",
        "text": "rgba(var(--text))",
        "cta-hover": "rgba(var(--cta-hover))"
      }
    },
  },
  plugins: [daisyui],
  // daisyui: {
  //   themes: [
  //     {
  //       darktheme: {
  //         primary: "#3B82F6",
  //         secondary: "#F87171",
  //         accent: "#3D3E6C",
  //         neutral: "#C4B5FD",
  //         "base-100": "#202938",
  //         "text": "#ffffff",
  //       "cta-hover": "rgba(var(--cta-hover))"

  //       },
  //     },
  //     {
  //       lighttheme: {
  //         primary: "#2563EB",
  //         secondary: "#FCA5A5",
  //         accent: "#BBCCFA",
  //         neutral: "#DDD6FE",
  //         "base-100": "#F9FAFB",
  //         "text": "#000000",
  //       "cta-hover": "rgba(var(--cta-hover))"

  //       },
  //     },
  //   ],
  //   darkTheme: "darktheme",
  // },
};
