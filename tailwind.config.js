/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.vue",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "prompt-light": "'Prompt-Light', sans-serif",
        "prompt-regular": "'Prompt-Regular', sans-serif",
        "prompt-medium": "'Prompt-Medium', sans-serif",
        "prompt-bold": "'Prompt-Bold', sans-serif",
      },
      colors: {
        "w-primary": "#4326c4",
        "w-secondary": "#ffe01b",
        "w-tertiary": "#1B242C",
        "w-gray": "#f3f2f1",
        "w-gray-border": '#D5D1DF',
        "w-gray-border-dark": '#717171',
        "w-primary-text": "#1B242C"
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/forms")],
}