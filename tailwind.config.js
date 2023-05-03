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
        "w-secondary": "#e0402f",
        "w-tertiary": "#1B242C",
        "w-gray": "#f3f2f1",
        "w-gray-light": "#f8f9fa",
        "w-gray-border": '#D5D1DF',
        "w-gray-border-dark": '#717171',
        "w-primary-text": "#1B242C",
        "w-gray-1": "#eff2f4",
        "w-gray-2": "#e7ebee",
        "w-gray-3": "#e7ebee",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/forms")],
}