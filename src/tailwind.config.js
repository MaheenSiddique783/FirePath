/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelRed: '#FF9B9B',
        pastelOrange: '#FFD6A5',
        pastelYellow: '#FDFFB6',
        pastelGreen: '#CAFFBF',
        bgBlue: '#E2F0CB',
      }
    },
  },
  plugins: [],
}
