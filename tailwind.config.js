/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"], //The above tells tailwind what type of files it is allowed into
  theme: {
    extend: {
      //Extended allows us to add new values (font, as an example) without overwriting the default value
      fontFamily: {
        determination: ["Determination"],
        operator: ["Operator"],
      }, //Adds above font family to be used anywhere in the app
      typography: {
        //imports to alter elements of the website
        DEFAULT: {
          //Will affect the default values. MUST BE IN CAPITALS
          css: {
            //tells tailwind that it plans on altering css
            h1: {
              fontFamily: ["Determination"],
            },
            h2: {
              fontFamily: ["Determination"],
            },
            h3: {
              fontFamily: ["Determination"],
            },
            p: {
              fontFamily: ["Operator"],
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    //An optional plugin made by Tailwind CSS. Used if you want to change the font of certain tags instead of certain elements
  ],
};
