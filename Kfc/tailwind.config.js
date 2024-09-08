// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Path to your components
    './node_modules/flowbite/**/*.js', // Path to Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Ensure this is the correct plugin path
  ],
};
