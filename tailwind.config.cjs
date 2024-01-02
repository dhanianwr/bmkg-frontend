/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/admin/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // prefix: 'tw-',
  //   theme: {
  //       extend: {},
  //   },
  //   corePlugins: {
  //       preflight: false,
  //   },
  plugins: [require("flowbite/plugin")],
});
