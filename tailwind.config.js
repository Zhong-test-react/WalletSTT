/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}' // Note the addition of the `src` directory.
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        mobile: '375px'
      }
    }
  },
  plugins: [
    require('tailwindcss-textshadow') // You might need to install this plugin if you haven't
  ],
  
};
