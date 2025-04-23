import daisyui from "daisyui";

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class",
    theme: {
      extend: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1920px",
        },     
      },
    },
    plugins: [daisyui],
    daisyui: {
      themes: [
        {
          darktheme: {
            primary: "#3B82F6",
            secondary: "#F87171",
            accent: "#3D3E6C",
            neutral: "#C4B5FD",
            'base-100': "#202938",
            white: "#ffffff",
          },
        },
        {
          lighttheme: {
            primary: "#2563EB",
            secondary: "#FCA5A5",
            accent: "#BBCCFA",
            neutral: "#DDD6FE",
            "base-100": "#F9FAFB",
            "white": "#fffffff",
          },
        },
      ],
      darkTheme: "darktheme",
    },
  };
  