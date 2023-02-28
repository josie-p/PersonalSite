/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true, 
    files : [
      "./src/**/*.{html,js,jsx}", 
      "./public/index.html"
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
