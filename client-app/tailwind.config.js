module.exports = {
    prefix: "",
    mode: "jit",
    content: ["./src/**/*.{html,ts,js,scss}"],
    theme: {
      spacing: {
        0: "0px",
        1: "10px",
        1.5: "15px",
        2: "20px",
        3: "30px",
        4: "40px",
        5: "50px",
        6: "60px",
      },
      screens: {
        "2xs": "320px",
        xs: "375px",
        s: "425px",
        sm: "768px",
        md: "1024px",
        lg: "1440px",
        xl: "2560px",
      },
      fontSize: {
        0: "0px",
        1: "10px",
        1.5: "15px",
        2: "20px",
        3: "30px",
        4: "40px",
        5: "50px",
        6: "60px",
      },
      extend: {
        colors: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/typography"),
    ],
  };
  